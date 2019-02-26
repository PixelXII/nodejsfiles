class BotMessage {
    constructor(name, content) {
        this.content = content
        var p = document.createElement('div')
        id('main_container').appendChild(p)
        p.className = 'message'
        p.style.background = 'lightgrey'
        p.textContent = `${name} > ${content}`
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
          console.log(this.elem)
          id('contacts').appendChild(this.elem)
          this.elem.style.display = 'none'
          this.elem.className = "contact"
          user.contacts.push(this)
          this.elem.innerHTML = `<img class="contact-profile" src="${profilesrc}"</img>
                    <div class="contact-name">${name}</div>`
          this.elem.addEventListner('click', () => {
               this.openDM()
          })
     }
     display() {
          this.elem.style.display = 'block'
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
        p.textContent = `${user.name} > ${content}`
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
