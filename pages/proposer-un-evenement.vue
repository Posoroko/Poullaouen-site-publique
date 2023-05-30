<template>
    <main class="proposerMain">
        <HeaderPathBar :path="path" />
        <HeaderTItleBar title="Proposer un événement" />
        <p class="intro-text mainWidth">
            Vous pouvez proposer un événement en remplissant le formulaire ci-dessous. Il sera affiché dans l'agenda après avoir été validé par l'équipe de la mairie.
        </p>
        
        <div class="marTop50"></div>

        <form ref="form" class="form smallWidth flex column">
            <label for="firstName">Votre nom complet</label>
            <input name="name" type="text" id="name" placeholder="Nom et Prénom">

            <label for="telephone">Votre numéro de téléphone</label>
            <input name="telephone" type="text" id="telephone" placeholder="0298935076">

            <label for="email">Votre adresse email</label>
            <input name="email" type="text" id="email" placeholder="adresse@mail.com">

            <label for="eventTitle">Titre de l'événement</label>
            <input type="text" id="eventTitle" placeholder="Fête des fleurs">

            <label for="organiser">Qui organise l'événement</label>
            <input type="text" id="organiser" placeholder="Mon association">

            <label for="eventDescription">Description de l'événement</label>
            <textarea id="eventDescription"></textarea>

            <label for="eventDate">Date de l'événement</label>
            <input type="date" id="eventDate">

            <label for="eventTime">Heure de l'événement (facultatif)</label>
            <input type="time" id="eventTime">

            <label for="eventPlace">Lieu de l'événement</label>
            <input type="text" id="eventPlace">

            <label for="eventPrice">Prix de l'événement (facultatif)</label>
            <input type="text" id="eventPrice">

            <label for="eventImage">Image de l'événement</label>
            <input type="file" id="eventImage">
             
            <div class="flex column gap10 pad20">
                
                <label class="checkBoxLabel" for="acceptTerms">
                    J'accepte que la mairie de Poullaouen conserve les informations que j'ai fournies ci-dessus et je confirme avoir lu
                    <NuxtLink to="/mentions-legales" class="externalLink">
                        les mentions légales. 
                    </NuxtLink>
                </label>
                <input type="checkbox" id="acceptTerms" required>
            </div>

            <div class="centered marTop50">
                <button class="formButton" @click.prevent="handleSubmit">Envoyer</button>
            </div>
        </form>
    </main>
</template>

<script setup>
const { createItems } = useDirectusItems()





const error = ref(null)
const isPending = ref(false)
const message = ref(null)

const form = ref(null)

const allowedExtensions = ["image/jpg", "image/jpeg", "image/png"]

const handleSubmit = async () => {
    
    if(isPending.value) return

    error.value = null;
    isPending.value = true;

    let fileId = null

    if(form.value.eventImage.files[0]) {
        fileId = await postImage(form.value.eventImage.files[0])
         if (!fileId) {
            isPending.value = false
            return
        }
    }
   
    

    if(!form.value.name.value.length || form.value.name.value.length > 50) {
        alert("Le nom doit contenir entre 1 et 50 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.telephone.value.length || form.value.telephone.value.length > 10) {
        alert("Le numéro de téléphone doit contenir entre 10 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.email.value.length || form.value.email.value.length > 320 || form.value.email.value.length < 5) {
        alert("L'adresse email doit contenir entre 5 et 320 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.eventTitle.value.length || form.value.eventTitle.value.length > 50) {
        alert("Le titre de l'événement doit contenir entre 1 et 50 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.organiser.value.length || form.value.organiser.value.length > 50) {
        alert("Le nom de l'organisateur doit contenir entre 1 et 50 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.eventDescription.value.length || form.value.eventDescription.value.length > 500) {
        alert("La description de l'événement doit contenir entre 1 et 500 caractères")
        error.value = "there is a problem"
    }
    if(!form.value.eventPlace.value.length || form.value.eventPlace.value.length > 50) {
        alert("Le lieu de l'événement doit contenir entre 1 et 50 caractères")
        error.value = "there is a problem"
    }
    if(form.value.eventPrice.value.length > 50) {
        alert("Le prix de l'événement doit contenir entre 1 et 50 caractères")
        error.value = "there is a problem"
    }
    // if (!form.value.acceptTerms.checked) {
    //     error.value = "Vous devez accepter les mentions légales"
    //     alert(error.value)
    //     error.value = "there is a problem"
    // }

    if(error.value) {
        isPending.value = false
        return
    }
 
    const data = {
        collection: "Agenda",
        items: [
            {
                title: form.value.eventTitle.value,
                date: form.value.eventDate.value,
                time: form.value.eventTime.value,
                location: form.value.eventPlace.value,
                content: form.value.eventDescription.value,
                organiser: form.value.organiser.value,
                userName: form.value.name.value,
                userEmail: form.value.email.value,
                userPhone: form.value.telephone.value,
                userCreated: true,
                sendEmail: true,
                image: fileId,
                termsAccepted: form.value.acceptTerms.checked
            }
        ]
    }

    await createItems(data)
        .then(res => {
            message.value = "Super! Votre événement a bien été envoyé. Il sera publié après validation par l'équipe de la mairie."

            showInModal(message.value)
            form.value.reset()
        }).catch(err => {
            showInModal(err.message)
        })
        isPending.value = false;
}
const postImage = async (file) => {
    console.log('post image')

    if (!allowedExtensions.includes(file.type)) {
 
        alert("L'image doit être au format jpg, jpeg ou png")
        return
    }


    const imageFormData = new FormData();
    imageFormData.append('file', file)

    const requestOptions = {
        method: 'POST',
        body: imageFormData
    };
    let fileId = null
    await fetch("https://admin.mairie-poullaouen.fr/files", requestOptions)
        .then(response => response.json())
        .then(data => {

        fileId = data.data.id
    })
    .catch(error => {
        
        error.value = error.message
        console.error('Error:', error);
    });
    return fileId
}


const showInModal = (message) => {
    const modal = document.getElementById('masterModal')
    let children = modal.children

    for (const child of children) {
        if (!child.classList.contains('modalNode')) {
            modal.removeChild(child)
        }
    }

    const _h1 = document.createElement('h1')
    _h1.style.margin = "40px"
    _h1.innerText = message
    _h1.style.width = "min(95vw, 600px)"
    _h1.style.color = "white"
    _h1.style.padding = "10px"
    _h1.style.margin = "10px"
    _h1.style.backgroundColor = "var(--dark-blue)"

    modal.appendChild(_h1)
    modal.showModal()
}



const path = ref([
    {
        text: "Accueil",
        link: "/",
        active: true
    },
    {
        text: "Proposer un événement",
        link: "/proposer-un-evenement",
        active: false
    }
])


</script>

<style scoped>
.smallWidth {
    width: min(100%, 600px);
    margin: auto;
    padding: 10px;
}
label {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
}
input {
    font-size: 18px;
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 10px;
    border: 3px solid var(--dark-blue);
    margin-top: 5px;
}
textarea {
    height: 150px;
    resize: vertical;
    border: 3px solid var(--dark-blue);
    border-radius: 10px;
    margin-top: 5px;
}
.formButton {
    font-size: 20px;
    font-weight: 700;
    color: white;
    background-color: var(--dark-blue);
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}
.formButton:hover {
    background-color: rgb(10, 65, 148);
}
.checkBoxLabel{
    font-size: 14px;
}

input[type=checkbox] {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
}
</style>