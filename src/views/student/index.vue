<template>
  <div class="student">
    <nav>
      <v-navigation-drawer app clipped v-model="drawer">
        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title color="amber">My homework</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar color="teal" elevation="3" dark clipped-left app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span style="font-weight: bold;">TCS</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text tile>
          <span>sign out</span>
        </v-btn>
      </v-app-bar>
    </nav>

    <v-main>
      <v-container fluid align-start justify-start>
        <v-layout align-start justify-start>
          <card
            title="Matrix multiplication"
            classname="Year 11 Maths"
            teacher="Marcus Hart"
            kind="Revision"
            state="waiting"
            date="July 3 2020"
          />

          <card                                                                                                                                      
            title="Plato's Cave Allegory"                                                                                                            
            classname="Year 11 RS"                                                                                                                
            teacher="Jane Doe"                                                                                                                    
            kind="Presentation"                                                                                                                          
            state="late"                                                                                                                          
            date="July 1 2020"                                                                                                                       
          /> 
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import card from "./card";

export default {
  data() {
    return {
      drawer: null
    };
  },
  components: {
    card
  }
};
</script>
