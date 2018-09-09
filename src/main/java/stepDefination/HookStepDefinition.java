package stepDefination;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HookStepDefinition {
	
	WebDriver driver;
	
	// GLOBAL HOOK
	@Before(order=0)
	public void setUp1() {
		System.out.println("GLOBAL HOOK#1 --> OPENING BROWSER: SETUP");
	}
	
	@After(order=0)
	public void tearDown1() {
		System.out.println("GLOBAL HOOK#1 --> CLOSING BROWSER: TEARDOWN");
	}
	
	@Before(order=1)
	public void setUp2() {
		System.out.println("GLOBAL HOOK#2 --> OPENING BROWSER: SETUP");
	}
	
	@After(order=1)
	public void tearDown2() {
		System.out.println("GLOBAL HOOK#2 --> CLOSING BROWSER: TEARDOWN");
	}
	
	// LOCAL HOOK -- tagging hook
	@Before("@FirstScenria")
	public void beforeFirst() {
		System.out.println("LOCAL HOOK#1 --> BEFORE 1st Only");
	}
	
	@After("@FirstScenria")
	public void afterFirst() {
		System.out.println("LOCAL HOOK#1 --> AFTER 1st Only");
	}
	
	@Given("^user is on login screen$")
	public void user_is_on_login_screen() throws Throwable {
	    System.out.println("*** User is on Login Page ***");
	}

	@When("^title is my account$")
	public void title_is_my_account() throws Throwable {
		System.out.println("*** Title is My Account ***");
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		System.out.println("*** User enter username and password ***");
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		System.out.println("*** User click Login ***");
	}

	@Then("^user logged in successfully to application$")
	public void user_logged_in_successfully_to_application() throws Throwable {
		System.out.println("*** SUCCESSFUL ***");
	}

}
