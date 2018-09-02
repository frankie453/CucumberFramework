package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rohit\\eclipse-workspace\\CucumberBDDFramework\\src\\main\\java\\features\\login.feature"
		,glue= {"stepDefination"}
		)

public class TestRunner {

}
