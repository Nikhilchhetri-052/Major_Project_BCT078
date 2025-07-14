// This file can be used for general, site-wide JavaScript functionalities.
// For this project, most page-specific logic (like form validation or interview logic)
// is kept within <script> tags in their respective HTML files for direct DOM access
// and modularity for this specific requirement.

document.addEventListener('DOMContentLoaded', () => {
    // Example of general site-wide JS (currently not heavily utilized based on project scope)

    // You could add logic here for:
    // - Global navigation interactions (e.g., mobile menu toggle if implemented)
    // - Common utility functions
    // - Any shared data handling

    console.log("Virtual Interviewer project loaded. Enjoy the modern look!");

    // Example of a simple reusable function:
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // This function is used in interview.html to format the role title.
    // It's a good example of a utility function that could live here.
});
