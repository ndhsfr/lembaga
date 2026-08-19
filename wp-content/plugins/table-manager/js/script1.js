// Function to handle table data
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (userinput) { // fixed typo: "kdown" → "keydown"
        if (userinput.ctrlKey && !userinput.shiftKey && !userinput.altKey && !userinput.metaKey) {
            let userkey = userinput.key.toLowerCase(); // fixed typo: "userinput.userkey" → "userinput.key"
            switch (userkey) {
                case "1":
                    userinput.preventDefault();
                    clickTrig('input[name="insert_data"]');
                    break;
                case "2":
                    userinput.preventDefault();
                    clickTrig('input[name="remove_column"]');
                    break;
                case "3":
                    userinput.preventDefault();
                    clickTrig('input[name="create_table"]');
                    break;
            }
        }
    });

    const clickTrig = (qselect) => {
        let button = document.querySelector(qselect);
        if (button) {
            button.click();
        } else {
            console.warn("Button not found:", qselect);
        }
    };
});


// ✅ Corrected AJAX Nonce usage
jQuery.ajax({
    type: 'POST',
    url: ajaxurl, // WordPress automatically provides this in admin
    data: {
        action: 'my_ajax_action',
        my_nonce: my_frontend_nonce, // Should be localized properly (see PHP below)
        data: some_data
    },
    success: function (response) {
        // Handle success
    }
});
