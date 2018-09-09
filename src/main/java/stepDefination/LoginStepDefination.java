/*package stepDefination;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver;
		
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
	    System.setProperty("webdriver.chrome.driver",  "D:\\Webdriver\\drivers\\chromedriver.exe");
	    driver= new ChromeDriver();
	    driver.get("http://test1.absofttrainings.com/my-account/");
	}
	
	@When("^title of the page is My Account$")
	public void title_of_the_page_is_My_Account() {
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("My Account | ABSoft Trainings � E-Commerce test web site", title);
	}

	@Then("^user enter username and password$")
	public void user_enter_username_and_password() {
	    driver.findElement(By.name("username")).sendKeys("testuser2");
	    driver.findElement(By.name("password")).sendKeys("testpwd2");
	}
	
	@Then("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.name("login")).click();
	}
	
	@Then("^user logged in successfully$")
	public void user_logged_in_successfully() {
		String text=driver.findElement(By.id("user_info")).getText();
		Assert.assertTrue(text.contains("testuser"));
		driver.quit();
	}
}
*/