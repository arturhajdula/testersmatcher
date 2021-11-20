package testermatcher.csv;

import java.text.SimpleDateFormat;

import javax.servlet.ServletContext;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvParser;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

public final class CSVConfig {

	private CsvSchema schema;
	private CsvMapper mapper;
	private final ServletContext servletContext;
	
	public static CSVConfig createDefaultCSVConfig() {
		return createCSVConfigWithContextPath(null);
	}
	
	public static CSVConfig createCSVConfigWithContextPath(ServletContext servletContext) {
		CsvSchema orderLineSchema = CsvSchema.emptySchema().withHeader().withColumnSeparator(CSVConst.CSV_COLUMN_SEPARATOR)
				.withQuoteChar(CSVConst.CSV_QUOTE_CHAR);
		
		CsvMapper csvMapper = new CsvMapper();
		csvMapper.setDateFormat(new SimpleDateFormat(CSVConst.CSV_DATE_FORMAT));
		csvMapper.enable(CsvParser.Feature.SKIP_EMPTY_LINES);
		
		return new CSVConfig(orderLineSchema, csvMapper, servletContext);
	}
	
	public CSVConfig(CsvSchema schema, CsvMapper mapper, ServletContext servletContext) {
		this.schema = schema;
		this.mapper = mapper;
		this.servletContext = servletContext;
	}

	public CsvSchema getSchema() {
		return schema;
	}

	public CsvMapper getMapper() {
		return mapper;
	}

	public ServletContext getServletContext() {
		return servletContext;
	}
}
