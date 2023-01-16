
const dt = luxon.DateTime;


const app = Vue.createApp({
    data () {
        return {
          currentIndex : 0,
          searchChat : '',
          searchInChat : '',
          searchStatus : false,
          removeMessageStatus : {},
            user: {
                name: 'Roberto ',
                avatar: '_io'
              },
              newMessage : {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                text: '',
                status: 'sent'
              },

              newReceivedMessage : {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                text: 'ok',
                status: 'received'
              },
              contacts: [
                {
                  id: 0,
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  id: 1,
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  id: 2,
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  id: 3,
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
              ]
        }
    },
    
    computed : {
      filteredChat () {
        return this.contacts.filter (contact => contact.name.toLowerCase().includes(this.searchChat)) 
        
      },

      filteredMessage () {
        return this.contacts[this.currentIndex].messages.filter (message => message.text.toLowerCase().includes(this.searchInChat));
      }

    },

    methods : {
      sendAMessage () {
        if (this.newMessage.text) {
          this.contacts[this.currentIndex].messages.push(this.newMessage);
          this.newMessage = {
            date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
            text: '',
            status: 'sent'
          };

          setTimeout (() => {
            this.contacts[this.currentIndex].messages.push(this.newReceivedMessage);
          }, 1000)
        }
      },

      setCurrentIndex (i) {
        this.currentIndex = i;
      },

      toggleStatus () {
        this.searchStatus = !this.searchStatus;
        this.searchInChat = '';
      },
    }


})
    
app.mount('#root');