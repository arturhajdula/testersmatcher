package testermatcher.services;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import testermatcher.algorithm.TesterMatcherAlgorithm;
import testermatcher.algorithm.UserWithExperience;
import testermatcher.container.DataContainerService;
import testermatcher.container.FilterInputDataService;
import testermatcher.container.FilterOutputData;

@Path("/testermatcher")
public class TesterMatcherService {

	private static final Logger logger = Logger.getLogger(TesterMatcherService.class.getName());

	private ObjectMapper mapper;

	public TesterMatcherService() {
		this.mapper = new ObjectMapper();
	}

	@GET
	@Path("/getCountries")
	@Produces(MediaType.APPLICATION_JSON)
	public String getCountriesInputData() throws JsonProcessingException {
		return this.toREST(FilterInputDataService.INSTANCE.getCountriesAll());
	}
	
	@GET
	@Path("/getDeviceNames")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDeviceNamesInputData() throws JsonProcessingException {
		return this.toREST(FilterInputDataService.INSTANCE.getDeviceNamesAll());
	}

	@GET
	@Path("/getUsersWithExperience")
	@Produces(MediaType.APPLICATION_JSON)
	public String getUsersWithExperience(@QueryParam("countries") String countries,
			@QueryParam("deviceNames") String deviceNames) throws JsonProcessingException {
		long time = System.currentTimeMillis();

		Set<String> countriesGiven = processInputData(countries).collect(Collectors.toSet());
		Set<String> deviceNamesGiven = processInputData(deviceNames).collect(Collectors.toSet());
		FilterOutputData filterOutputData = new FilterOutputData();
		filterOutputData.setSelectedCountries(countriesGiven);
		filterOutputData.setSelectedDeviceNames(deviceNamesGiven);
		List<UserWithExperience> ret = TesterMatcherAlgorithm.execute(DataContainerService.INSTANCE, filterOutputData);
		System.out.println(countriesGiven);
		System.out.println(deviceNamesGiven);
		logger.info("success: " + countriesGiven + ", time: " + (System.currentTimeMillis() - time) + " ms");
		return this.toREST(ret);
	}

	private Stream<String> processInputData(String countries) {
		return Arrays.stream(countries.replaceAll("[()\\[\\]]", "").trim().split(","));
	}

	private String toREST(Object obj) throws JsonProcessingException {
		return this.mapper.writeValueAsString(obj);
	}
}