import React from "react"

const msg = `<div id="fb-root"></div>
              <script>
                window.fbAsyncInit = function() {
                  FB.init({
                    xfbml            : true,
                    version          : 'v3.2'
                  });
                };

                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/el_GR/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));</script>
              <div class="fb-customerchat"
                attribution=setup_tool
                page_id="341603016451170"
                theme_color="#7646ff"
                logged_in_greeting="Γειά σας! Πως μπορούμε να βοηθήσουμε;"
                logged_out_greeting="Γειά σας! Πως μπορούμε να βοηθήσουμε;">
              </div>`

const Messenger = () => (
  <div dangerouslySetInnerHTML={{__html: msg}} />
)
export default Messenger
