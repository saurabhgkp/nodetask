Install Dependencies 
   npm install
   
Running the Project
Start the Server In the terminal, run:

npm start
Open the Dashboard Open your web browser and go to:
   http://localhost:3000/dashboard.html
   
How It Works
The application fetches data from a predefined API endpoint.
It evaluates various checklist rules defined in a separate module (rules.js).
The results of the evaluations are displayed dynamically on a simple HTML dashboard.
Checklist Rules

The following conditions are evaluated for the application:

Valuation Fee Paid: Must be true.
UK Resident: Must be true.
Risk Rating Medium: Must equal "Medium".
LTV Below 60%: Calculated based on the formula (Loan Required / Purchase Price) * 100 and must be less than 60%.
Future Development
Additional checklist rules can easily be incorporated by modifying the rules.js file.
