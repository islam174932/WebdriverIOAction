

public class StepDefinitions {

    @Given("^the user is on the registration page$")
    public void goToRegistrationPage() {
        // Code to navigate to the registration page
        System.out.println("User is on the registration page");
    }

    @When("^the user enters \"([^\"]*)\" as their (phone number|email address)$")
    public void enterDetails(String value, String type) {
        switch (type) {
            case "phone number":
                System.out.println("User enters phone number: " + value);
                break;
            case "email address":
                System.out.println("User enters email address: " + value);

                // Regular expression to validate email address format
                String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

                if (value.matches(emailRegex)) {
                    System.out.println("Email address is valid");
                } else {
                    System.out.println("Email address is invalid");
                }
                break;
            default:
                System.out.println("Unsupported type: " + type);
        }
    }
}
