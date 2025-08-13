(function() 
{
    emailjs.init("6ygN4ZcHHMTDFhA6d");
})();

// Handle form submission
document.getElementById("commentForm").addEventListener("submit", function(event) 
{
    event.preventDefault();

    emailjs.sendForm("service_zp33w8a", "template_i7140gu", this)
        .then(function(response) 
		{
            console.log("SUCCESS", response);
            alert("Your comment has been sent! 🚀");
        }, 
		
		function(error) 
		{
            console.error("FAILED", error);
            alert("There was an error sending your comment. Please try again.");
        });
});

const sendBtn = document.querySelector(".send-btn");

// Change text and color on mouseover
sendBtn.addEventListener("mouseover", event => 
{
    sendBtn.textContent = "Let's go! Click here! 🪐";
    // The CSS :hover rule will handle the color change here
});

// Revert to original state on mouseout
sendBtn.addEventListener("mouseout", event => 
{
    sendBtn.textContent = "Send 🚀";
    // The CSS :hover rule will revert the color automatically
});

// Change to "Bravo" on click
sendBtn.addEventListener("click", event =>
{
    sendBtn.textContent = "Bravo! 🛸";
});

document.addEventListener("DOMContentLoaded", function () 
{
    const chatBtn = document.getElementById("chatbot-btn");
    const chatContainer = document.getElementById("chat-container");
    const chatFrame = document.getElementById("chat-frame");
    const closeChat = document.getElementById("close-chat");

    // Load Chatbase Embed Script
    (function () 
	{
        if (!window.chatbase || window.chatbase("getState") !== "initialized") 
		{
            window.chatbase = (...arguments) => 
			{
                if (!window.chatbase.q) 
				{
                    window.chatbase.q = [];
                }
                window.chatbase.q.push(arguments);
            };
            window.chatbase = new Proxy(window.chatbase, 
			{
                get(target, prop) 
				{
                    if (prop === "q") 
					{
                        return target.q;
                    }
                    return (...args) => target(prop, ...args);
                }
            });
        }
        
		const onLoad = function () 
		{
            const script = document.createElement("script");
	    script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "ihDOnwrUR2rLF_IPaIwkG"; 
            script.domain = "www.chatbase.co";
            document.body.appendChild(script);
        };
        
		if (document.readyState === "complete") 
		{
            onLoad();
        } 
		
		else
		{
            window.addEventListener("load", onLoad);
        }
    })();

    // Close Chatbot
    closeChat.addEventListener("click", function () 
	{
        chatContainer.style.display = "none";
    });
});

let userId = localStorage.getItem("user_id");

if (!userId) 
{
    userId = "user_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("user_id", userId);
}

console.log("User ID:", userId);

