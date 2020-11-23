<template>
    <div>
      <v-card
        class="incomingCall"
        width="660"
        outlined
        id="incomingCall"
        v-if="incoming"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-row>
                <v-col lg="9">
                    <div class="d-flex align-center incomingCall__title">
                        <v-icon color="primary">mdi-rotate-45 mdi-phone-in-talk</v-icon><h2>Incoming Call</h2>
                    </div>
                    
                    <div class="incomingCall__item">
                        <div>
                            <p>Source:</p>
                            <h3>Google AdWords</h3>
                        </div>
                        <div>
                            <p>Caller:</p>
                            <h3>James Clark (123-456-7890)</h3>
                        </div>                    
                    </div>
                    <div class="incomingCall__item">
                        <div>
                            <p>Last Call:</p>
                            <h3>Today, 10:15 AM</h3>
                        </div>
                        <div>
                            <p>Today Calls:</p>
                            <h3>3</h3>
                        </div>                    
                    </div>                
                </v-col>
                <v-col lg="3">
                    <div class="incomingCall__action incomingCall__answer">
                        <div>
                            <v-icon>mdi-phone</v-icon>
                        </div>
                        <span>Answer</span>
                    </div>
                    <div class="incomingCall__action incomingCall__hangup">
                        <div>
                            <v-icon>mdi-phone-hangup</v-icon>
                        </div>
                        <span>Hang Up</span>
                    </div>
                    <div class="incomingCall__action incomingCall__skip">
                        <div><v-icon>mdi-arrow-right</v-icon></div><span>Skip</span>
                    </div>
                </v-col>
            </v-row>

          </v-list-item-content>

        </v-list-item>

      </v-card>        
    </div>
</template>

<script>
  export default {
    data: () => ({
        incoming: false
    }),
    mounted () {

        if (this.incoming) {
            dragElement(document.getElementById("incomingCall"));    
        }
        

        function dragElement(elmnt) {
          var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
          } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
          }

          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }

          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
          }

          function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
          }
        }

    }    
  }
</script>