package testermatcher;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import testermatcher.container.DataContainerService;
import testermatcher.container.FilterInputDataService;
import testermatcher.csv.CSVConfig;
import testermatcher.transfer.DataTransfer;

public class ContextListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {
		CSVConfig config = CSVConfig.createCSVConfigWithContextPath(servletContextEvent.getServletContext());
		DataTransfer dataCSV = DataTransfer.readData(config);
		DataContainerService.INSTANCE.init(dataCSV);
		FilterInputDataService.INSTANCE.init(DataContainerService.INSTANCE);
	}

	@Override
	public void contextDestroyed(ServletContextEvent servletContextEvent) {
		System.out.println("Shutting down");
	}
}