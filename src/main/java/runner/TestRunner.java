package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Rohit\\eclipse-workspace\\CucumberBDDFramework\\src\\main\\java\\features\\hook.feature", // path of feature file
		glue= {"stepDefination"}, // path of step definition file
		format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // pretty will generate console report
		monochrome=true, // to display the console output in proper readable format
		strict=true, // it will check any step is not defined in step definition file
		dryRun=false // to check mapping is proper between feature file and step definition file
		//tags= {"~@SmokeTest", "~@RegressionTest", "~@E2ETest"}
		)

public class TestRunner {

}

// Tags
// To run all test case marked as @SmokeTest  					 : tags= {"@SmokeTest"}
// To run all test case NOT marked as @SmokeTest  				 : tags= {"~@SmokeTest"}
// To run all test case marked as @SmokeTest OR @RegressionTest  : tags= {"@SmokeTest , @RegressionTest"}
// To run all test case marked as @SmokeTest AND @RegressionTest : tags= {"@SmokeTest" , "@RegressionTest"}
// To run all test case marked as @SmokeTest AND @RegressionTest, but not @E2ETest : tags= {"@SmokeTest" , "@RegressionTest" , "~@E2ETest"}
// To run all test case don't have any tag  				     : tags= {"~@SmokeTest", "~@RegressionTest", "~@E2ETest"}