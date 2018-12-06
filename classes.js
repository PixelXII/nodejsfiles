class BotMessage {
    constructor(name, content) {
        this.content = content
        var p = document.createElement('div')
        id('main_container').appendChild(p)
        p.className = 'message'
        p.style.background = 'lightgrey'
        p.innerHTML = `${name} > ${content}`
        p.style.opacity = 0;
        var a = 0;
        var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
    }
}

class Contact {
     constructor(name, profilesrc) {
          this.name = name
          this.profilesrc = profilesrc
          this.elem = document.createElement('div')
          this.elem.outerHTML = `<div class="contact">
                    <img class="contact-profile" src="${this.profilesrc}"</img>
                    <div class="contact-name">${this.name}</div>
                </div>`
          this.elem.addEventListner('click', () => {
               this.openDM()
          })
     }
     add() {
          user.contacts.push(this)
     }
     display() {
          id('contacts').appendChild(this.elem)
     }
     openDM() {
          current = this
          // anything else?
     }
}

class Dialogue {
     constructor(text) {
          var p = document.createElement('div')
          id('main_container').appendChild(p)
          p.style.background = '#eeeeee'
          p.innerHTML = text
          p.className = 'message'
          p.style.opacity = 0;
          var a = 0;
          var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
     }
}

class UserMessage {
    constructor(content) {
        var p = document.createElement('div')
        id('main_container').appendChild(p)
        p.className = 'message'
        p.innerHTML = `${user.name} > ${content}`
        p.style.opacity = 0;
        var a = 0;
        var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
    }
}