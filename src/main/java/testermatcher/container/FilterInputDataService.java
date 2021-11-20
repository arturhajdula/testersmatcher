package testermatcher.container;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public enum FilterInputDataService {
    INSTANCE;
    
	private List<String> countriesAll;
	private List<String> deviceNamesAll;
    private FilterInputDataService instance;
    
	public synchronized void init(DataContainerService data) {
		Set<String> countriesAll = data.getTesters().values().stream().map(t -> t.getCountry()).sorted()
				.collect(Collectors.toSet());
		this.countriesAll = countriesAll.stream().sorted().collect(Collectors.toList());

		Set<String> deviceNamesAll = data.getDevices().values().stream().map(d -> d.getDescription()).sorted()
				.collect(Collectors.toSet());
		this.deviceNamesAll = deviceNamesAll.stream().sorted().collect(Collectors.toList());
	}
	
	public List<String> getCountriesAll() {
		return countriesAll;
	}

	public List<String> getDeviceNamesAll() {
		return deviceNamesAll;
	}
	
	public synchronized FilterInputDataService getInstance() {
	    return instance;
	}
}
