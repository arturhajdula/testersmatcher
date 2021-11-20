package testermatcher.csv;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.databind.MappingIterator;

public final class CSVReader {

	public static <T> List<T> readSimpleObjectsList(Class<T> type, String fileName, CSVConfig config) {

		try {

			MappingIterator<T> it = config.getMapper().readerFor(type).with(config.getSchema())
					.readValues(config.getServletContext().getResourceAsStream(fileName));
			
			return it.readAll();

		} catch (IOException e) {
			throw new CSVDataException("Error occurred while reading objects for " + fileName, e);
		}

	}
}
