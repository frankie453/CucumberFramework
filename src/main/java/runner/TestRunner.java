package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rohit\\eclipse-workspace\\CucumberBDDFramework\\src\\main\\java\\features\\login.feature", // path of feature file
		glue= {"stepDefination"}, // path of step definition file
		format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // pretty will generate console report
		monochrome=true, // to display the console output in proper readable format
		strict=true, // it will check any step is not defined in step definition file
		dryRun=false // to check mapping is proper between feature file and step definition file
		
		)

public class TestRunner {

}
