<template>
    <div class="navigation-menu text">
      <Announcement />
      
      <v-app-bar
        fixed
        app
        height="122"
        elevation="0"
      >
      <v-row>
        <v-col class="pl-1">
          <CompaniesMenu />    
        </v-col>
        <v-col class="d-flex justify-center">
          <v-toolbar-title class="white--text d-flex align-center">
            <img
              v-bind:src="logo_image"
              alt="Logo"
              class="mr-2 logo"
            >         
            <h5 class="mt-1 text-17 logo_label">
              {{ $t('title') }} 
            </h5>
          </v-toolbar-title>                 
        </v-col>
        <v-col> 
            <div class="d-flex align-center justify-end" >
              <AgentProfileMenu v-on:showSoftPhone="showSoftPhone"/>
            </div>
        </v-col>

      </v-row>
      <v-row>
          <div id="nav" class="ml-6 mt-1 hidden-sm-and-down">
              <v-btn text router-link rounded
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                exact
                class="nav_men_items"
                >{{item.title}}
                <v-icon
                  v-if="item.title=='Numbers'"
                  medium
                  class="ml-1"
                >
                  mdi-chevron-down
                </v-icon>
              </v-btn>
          </div>
      </v-row>      
      </v-app-bar>
      <IncomingCall />
      <v-navigation-drawer
        v-model="rightDrawer"
        :right="right"
        temporary
        fixed
        color="primary"
        width="350"
        class="softphone"
      >
        <v-list>
          <v-list-item class="softphone__header">
            <v-list-item-title class="light--text pt-4 pl-4 d-flex align-center">
              <span class="ml-6">Agent Status:</span>
              <v-sheet class="primary d-flex align-center">
                <v-switch
                  v-model="available"
                  @change="setAvailable"
                  :color="availableColor"
                ></v-switch>
                <p class="mb-1 success--text" v-if="available">{{availableLabel}}</p>
                <p class="mb-1 light--text" v-if="!available">{{availableLabel}}</p>
              </v-sheet>      
            </v-list-item-title>
          </v-list-item>

          <v-list-item class="softphone__pad pl-0 pr-0">
            <v-list-item-content>

              <div class="pl-10 pr-10">
                <v-list-item-title class="light--text pt-4 pl-4 d-flex align-center">
                  <span>My Caller ID:</span>
                </v-list-item-title>

                <div>
                    <v-select
                        outlined
                        dense
                        hide-details
                        :items="callers"
                        v-model="caller"
                        item-text="text"
                        item-value="id"
                        color="white"
                        background-color="white"
                    ></v-select>              
                </div>
                <div class="button mt-4 pa-4 dial_numbers mb-5" v-if="!calling">
                  <p class="white--text mb-0">{{dialNumbers}}</p>
                </div>
                <div v-if="!calling">
                  <div class="softphone__pad__row">
                    <div class="s_numbers" @click="addNumber('1')">1</div>
                    <div class="s_numbers" @click="addNumber('2')">2</div>
                    <div class="s_numbers" @click="addNumber('3')">3</div>
                  </div>                
                  <div class="softphone__pad__row">
                    <div class="s_numbers" @click="addNumber('4')">4</div>
                    <div class="s_numbers" @click="addNumber('5')">5</div>
                    <div class="s_numbers" @click="addNumber('6')">6</div>
                  </div>                
                  <div class="softphone__pad__row">
                    <div class="s_numbers" @click="addNumber('7')">7</div>
                    <div class="s_numbers" @click="addNumber('8')">8</div>
                    <div class="s_numbers" @click="addNumber('9')">9</div>
                  </div>                
                  <div class="softphone__pad__row">
                    <div class="s_numbers" @click="addNumber('*')">*</div>
                    <div class="s_numbers" @click="addNumber('0')">0</div>
                    <div class="s_numbers" @click="addNumber('#')">#</div>
                  </div>                
                  <div class="softphone__pad__row">
                    <div class="s_button" @click="emptyNumber"><v-icon color="white">mdi-close-circle</v-icon></div>
                    <div class="s_numbers">+</div>
                    <div class="s_button" @click="backSpace"><v-icon color="white">mdi-backspace</v-icon></div>
                  </div>                                                                                
                </div>
                <div class="text-center mt-5" v-if="!calling">
                  <v-btn color="success" rounded large width="200" @click="giveCalling(true)"><v-icon color="white">mdi-24px mdi-phone</v-icon></v-btn>
                </div>                
              </div>              

              <div class="text-center mt-8" v-if="!calling">
                <h4 class="grey_shades_4--text">My Recent Calls:</h4>
              </div>

              <div class="softphone__showcalls" v-if="!calling">
                <div class="softphone__showcalls__item">
                  <v-icon color="button">mdi-phone</v-icon>
                  <span>Call Back</span>
                </div>
                <div class="softphone__showcalls__item">
                  <v-icon color="button">mdi-magnify-minus-outline</v-icon>
                  <span>Show Call Details</span>                  
                </div>
              </div>

              <div class="softphone__showcalls__list"  v-if="!calling">
                <div class="softphone__showcalls__list__item" v-for="(item, index) in showcall_list" :key="index" >
                  <v-icon v-if="item.status=='rejected'" color="error">mdi-arrow-bottom-left</v-icon>
                  <v-icon v-if="item.status=='received'" color="success">mdi-arrow-top-right</v-icon>
                  <div class="ml-5">
                    <h3>{{item.name}}</h3>
                    <p>{{item.number}}</p>
                  </div>
                </div>                
              </div>

              <div v-if="calling" class="softphone__calling">
                <div class="text-center mt-8">
                  <h3 class="grey_shades_4--text font-weight-medium mb-5">Incoming Call In Progress</h3>
                  <div class="softphone__calling__pad success">
                    <div class="white--text mb-2">Name Unavailable</div>
                    <p class="white--text">123-456-789</p>
                    <h2 class="white--text mb-5">00:00:12</h2>
                    <div class="d-flex align-center justify-center">
                      <div class="softphone__calling__pad__action">
                        <v-icon>mdi-pause</v-icon>
                        <p class="black--text">Hold</p>
                      </div>
                      <div>
                        <v-btn color="error" rounded large width="120" @click="giveCalling(false)"><v-icon color="white">mdi-24px mdi-phone-hangup</v-icon></v-btn>
                      </div>
                      <div class="softphone__calling__pad__action">
                        <v-icon>mdi-microphone</v-icon>
                        <p class="black--text">Hold</p>
                      </div>

                    </div>
                  </div>

                  <div class="pl-10 pr-10 mt-8">
                    <div class="text-left">
                      <v-chip
                        v-for="(item, index) of selectedTags" :key="index"
                        close
                        label
                        color="button"
                        text-color="white"
                        class="mr-1 mt-1 mb-1"
                        @click:close="selectedTags.splice(index, 1)"
                      >
                        {{item.name}}
                      </v-chip>                      
                    </div>
                    <v-autocomplete
                      v-model="option"
                      :items="options"
                      class="white white--text mt-2"
                      hide-details
                      item-text="text"
                      item-value="id"
                      outlined
                      :dense="true"
                      placeholder="Add tags to this call..."
                      prepend-inner-icon="mdi-tag-outline"
                      @change="selectTag"
                    ></v-autocomplete>

                  </div>

                  <div class="pl-10">
                    <h3 class="font-weight-regular mt-8 mb-4 light--text">Transfer Call To:</h3>
                    <div class="text-left softphone__calling__item">
                      <v-btn class="button" rounded>
                        <v-icon>mdi-arrow-right</v-icon>
                        <span>Mike Terry</span>
                      </v-btn>
                    </div>

                    <div class="text-left softphone__calling__item">
                      <v-btn class="button" rounded>
                        <v-icon>mdi-arrow-right</v-icon>
                        <span>Landon Harvey</span>
                      </v-btn>
                    </div>

                  </div>
                </div>

              </div>
            </v-list-item-content>

          </v-list-item>          
        </v-list>
      </v-navigation-drawer>       
    </div>
</template>

<script>
// import {mapGetters} from 'vuex';

export default {
    name: 'Navigation',

    data: () => ({
      selectedTags:[],
      calling: false,
      available: false,
      availableColor: "white",
      availableLabel: "Not Available",
      options: [
        {value: 1, text: 'new lead'},
        {value: 2, text: 'call later'},
        {value: 3, text: 'compliant'},
        {value: 4, text: 'sale'},
        {value: 5, text: 'product 1'},
        {value: 6, text: 'product 2'}
      ],
      option: 0,      
      showcall_list: [
        {
          status: "rejected",
          name : "Name Unavailable",
          number: "123-456-7890"
        },
        {
          status: "received",
          name : "James Clark",
          number: "877-483-6972"
        },
        {
          status: "rejected",
          name : "Name Unavailable",
          number: "123-456-7890"
        }                
      ],
      caller: 1,
      dialNumbers: 0,
      callers: [
        {value: 1, text: 'Google AdWords (877-549-2645)'}
      ],       
      rightDrawer: false,
      right: true,
      drawer: false,
      call_image: require('@/assets/images/call.png'),
      logo_image: require('@/assets/images/logo.png'),

      accounts: [
        { title: 'FlowMarket' },
        { title: "Joe's Auto Repair" },
      ],
      items: [
          {
            icon: 'mdi-view-dashboard',
            title: 'Calls',
            to: '/calls'
          },
          {
            icon: 'mdi-deskphone',
            title: 'Numbers',
            to: '/numbers'
          },
          {
            icon: 'mdi-bug',
            title: 'Call Reports',
            to: '/reports/overview'
          },
          {
            icon: 'mdi-dialpad',
            title: 'Auto Dialer',
            to: '/auto-dialer'
          },
          {
            icon: 'mdi-television',
            title: 'Boradcasts',
            to: '/broadcasts'
          },                                    
          {
            icon: 'mdi-vector-combine',
            title: 'Integrations',
            to: '/integrations'
          },
          {
            icon: 'mdi-account-settings',
            title: 'Setting',
            to: '/setting/company/edit_company'
          }                                                            
        ],        
    }),

    computed: {
        // ...mapGetters({
        //     user: 'auth/user'
        // })
    },

    methods: {
      addNumber: function (number) {
        // if (this.dialNumbers != 0)
          this.dialNumbers = this.dialNumbers + number;
        // else 
        //   this.dialNumbers = number;
      },
      emptyNumber:function () {
        this.dialNumbers = 0;
      },
      backSpace: function () {
        const numbers = this.dialNumbers;
        if (this.dialNumbers.length > 1) 
          this.dialNumbers = numbers.slice(0, -1);
        else
          this.dialNumbers = 0;
      },
      async logout () {
          await this.$store.dispatch('auth/logout')
              .then(() => {
                  this.$snotify.info('You are logged out', {timeout: 3000});
                  this.$router.push({name: 'login'});
              });
      },
      showSoftPhone: function (){
        this.rightDrawer = true;
      },
      giveCalling: function (param) {
        this.calling = param;
      },
      selectTag(){
        this.selectedTags.push({name: this.option});
      },
      setAvailable() {
        if (this.available) {
          this.availableLabel = "Available";
          this.availableColor = "success";
        }
        else {
          this.availableLabel = "Not Available";
          this.availableColor = "white";
        }
        console.log(this.available)
      }
    },
    mounted () {
    },    
    watch: {
      rightDrawer: function () {
        if (this.rightDrawer) {
          document
        }
        console.log(this.rightDrawer);
      }
    },           
};
</script>
