<template>
    <main class="proposerMain">
        <HeaderPathBar :path="path" />
        <HeaderTItleBar title="Proposer un événement" />
        <p class="intro-text mainWidth">
            Vous pouvez proposer un événement en remplissant le formulaire ci-dessous. Il sera affiché dans l'agenda après avoir été validé par l'équipe de la mairie.
        </p>
        
        <div class="marTop50"></div>

        <form ref="form" class="smallWidth flex column">
            <label for="firstName">Votre nom complet</label>
            <input name="name" type="text" id="name">

            <label for="telephone">Votre numéro de téléphone</label>
            <input name="telephone" type="text" id="telephone">

            <label for="email">Votre adresse email</label>
            <input name="email" type="text" id="email">

            <label for="eventTitle">Titre de l'événement</label>
            <input type="text" id="eventTitle">

            <label for="organiser">Qui organise l'événement</label>
            <input type="text" id="organiser">

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
<!-- 
            <label for="eventImage">Image de l'événement</label>
            <input type="file" id="eventImage"> -->

            <div class="centered marTop50">
                <button class="formButton" @click.prevent="handleSubmit">Envoyer</button>
            </div>
        </form>
    </main>
</template>

<script setup>
const { createItems } = useDirectusItems()
const { createFiles } = useDirectusFiles()
const appConfig = useAppConfig();

const error = ref(null)
const isPending = ref(false)
const message = ref(null)

const form = ref(null)

const allowedExtensions = ["jpg", "jpeg", "png"]

const handleSubmit = async () => {

    // if(!allowedExtensions.includes(form.value.eventImage.value.split(".").pop())) {
    //     alert("L'image doit être au format jpg, jpeg ou png")
    //     return
    // }
    if(!form.value.name.value.length || form.value.name.value.length > 50) {
        alert("Le nom doit contenir entre 1 et 50 caractères")
        return
    }
    if(!form.value.telephone.value.length || form.value.telephone.value.length > 14) {
        alert("Le numéro de téléphone doit contenir entre 10 et 14 caractères")
        return
    }
    if(!form.value.email.value.length || form.value.email.value.length > 320 || form.value.email.value.length < 5) {
        alert("L'adresse email doit contenir entre 1 et 50 caractères")
        return
    }
    if(!form.value.eventTitle.value.length || form.value.eventTitle.value.length > 50) {
        alert("Le titre de l'événement doit contenir entre 1 et 50 caractères")
        return
    }
    if(!form.value.organiser.value.length || form.value.organiser.value.length > 50) {
        alert("Le nom de l'organisateur doit contenir entre 1 et 50 caractères")
        return
    }
    if(!form.value.eventDescription.value.length || form.value.eventDescription.value.length > 500) {
        alert("La description de l'événement doit contenir entre 1 et 500 caractères")
        return
    }
    if(!form.value.eventPlace.value.length || form.value.eventPlace.value.length > 50) {
        alert("Le lieu de l'événement doit contenir entre 1 et 50 caractères")
        return
    }
    if(form.value.eventPrice.value.length > 50) {
        alert("Le prix de l'événement doit contenir entre 1 et 50 caractères")
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
                status: "pending",
                userName: form.value.name.value,
                userEmail: form.value.email.value,
                userPhone: form.value.telephone.value,
                // image: null
            }
        ]
    }

    console.log(useDirectusFiles())
    // await createFiles(form.value.eventImage.value).then(res => {
    //     console.log(res.data)
    //     // data.items[0].image = res.data[0].id
    // }).catch(err => {
    //     console.log(err)
    // })

    await createItems(data)
        .then(res => {
            message.value = "Super! Votre événement a bien été envoyé. Il sera publié après validation par l'équipe de l'association."

            showInModal(message.value)
            form.value.reset()
        }).catch(err => {
            showInModal(err.message)
        })
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

    modal.appendChild(_h1)
    modal.showModal()
}



const path = ref([
    {
        text: "Accueil",
        link: "/"
    },
    {
        text: "Proposer un événement",
        link: "/proposer-un-evenement"
    }
])


</script>

<style scoped>
.smallWidth {
    width: min(100%, 600px);
    margin: auto;
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

</style>