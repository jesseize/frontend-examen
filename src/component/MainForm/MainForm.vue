<style src="./MainForm.scss" module lang="scss"></style>
<script src="./MainForm.js"></script>

<template>
  <div :class="$style.formWrapper">
    <h1 :class="$style.formTitle"><span :class="$style.highlighted">Inlichtingen</span> Formulier</h1>
    <form :class="$style.mainForm" action="">
      <input :class="$style.formInput" v-model="fullName" type="text" placeholder="Naam leerling" />
      <input :class="$style.formInput" v-model="birthday" type="date" placeholder="Geboortedatum: " />
      <h1 :class="$style.formSubtitle">Welke opleiding volgt de leerling?</h1>
      <DropDown
        :name="'opleiding'"
        :options="[
              {text: 'VMBO', value: 'vmbo'},
              {text: 'HAVO', value: 'havo'},
              {text: 'VWO', value: 'vwo'},
              {text: 'MBO', value: 'mbo'},
              {text: 'Anders', value: 'anders'},
            ]"
      />
      <div v-if="getOpleiding === 'vmbo'" :class="$style.vmbo">
        <div :class="$style.inline">
          <DropDown
            :name="'niveau'"
            :options="[
                {text: 'BB', value: 'bb'},
                {text: 'KB', value: 'kb'},
                {text: 'GL', value: 'GL'},
                {text: 'TL', value: 'TL'},
                {text: 'LWT', value: 'LWT'},
                {text: 'LWOO', value: 'LWOO'},
              ]"
          />
          <DropDown
            :name="'sector'"
            :options="[
                {text: 'Economie', value: 'economie'},
                {text: 'Landbouw', value: 'landbouw'},
                {text: 'Techniek', value: 'techniek'},
                {text: 'Zorg & Welzijn', value: 'zorg-welzijn'},
              ]"
          />
        </div>
        <input :class="$style.formInput" v-model="keuzevak" type="text" placeholder="Welk MVI keuzevak heeft de leerling gedaan? (niet verplicht)" />
        <input :class="$style.formInput" v-model="diplomaBehaald" type="date" placeholder="Diploma behaald / te behalen op: " />
      </div>
      <div v-else-if="getOpleiding === 'havo' || getOpleiding === 'vwo'" :class="$style.havoOrVwo">
        <input :class="$style.formInput" v-model="diplomaBehaald" type="date" placeholder="Diploma behaald / te behalen op: " />
        <input :class="$style.formInput" v-model="overgangsbewijs_from" type="date" placeholder="Overgangsbewijs van leerjaar: " />
        <input :class="$style.formInput" v-model="overgangsbewijs_to" type="date" placeholder="Overgangsbewijs tot leerjaar: " />
      </div>
      <div v-else-if="getOpleiding === 'mbo'" :class="$style.mbo">
        <DropDown
          :name="'opleidingsniveau'"
          :options="[
                {text: 'Niveau 1', value: '1'},
                {text: 'Niveau 2', value: '2'},
                {text: 'Niveau 3', value: '3'},
                {text: 'Niveau 4', value: '4'},
              ]"
        />
        <DropDown
          :name="'leerweg'"
          :options="[
              {text: 'BOL', value: 'bol'},
              {text: 'BBL', value: 'bbl'},
          ]"
        />
      </div>
      <div v-else-if="getOpleiding === 'anders'" :class="$style.anders">
        <input :class="$style.formInput" v-model="anders" type="text" placeholder="Overige opleiding" />
      </div>
      <h2 :class="$style.formSubtitle">Hoe is uw indruk op school over de leerling?</h2>
      <div :class="$style.ratingsWrapper">
        <div :class="$style.ratingsContainer">
          <h3 :class="[$style.formSubtitle, $style.pink]">Werkhouding</h3>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Concentratie</label>
            <DropDown
              :name="'concentratie'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Werktempo</label>
            <DropDown
              :name="'werktempo'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Zelfstandig werken in de klas</label>
            <DropDown
              :name="'zelfstanding-werken'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
        </div>
        <div :class="$style.ratingsContainer">
          <h3 :class="[$style.formSubtitle, $style.pink]">Instelling</h3>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Motivatie</label>
            <DropDown
              :name="'motivatie'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Doorzettingsvermogen</label>
            <DropDown
              :name="'doorzettingsvermogen'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
        </div>
        <div :class="$style.ratingsContainer">
          <h3 :class="[$style.formSubtitle, $style.pink]">Vaardigheden</h3>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Communicatieve vaardigheden</label>
            <DropDown
              :name="'communicatieve-vaardigheden'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
          <div :class="$style.ratingInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Sociale vaardigheden</label>
            <DropDown
              :name="'sociale-vaardigheden'"
              :options="[
                  {text: 'Onvoldoende', value: 'onvoldoende'},
                  {text: 'Zwak', value: 'zwak'},
                  {text: 'Voldoende', value: 'voldoende'},
                  {text: 'Goed', value: 'goed'},
                ]"
            />
          </div>
        </div>
        <textarea :class="[$style.textareaInput]" v-model="toelichting" type="text" placeholder="Toelichting"></textarea>
      </div>
      <div :class="$style.conditionWrapper">
        <h3 :class="$style.formSubtitle">Bijzonderheden</h3>
        <h4 :class="[$style.formSubtitle, $style.smallTitle]">Heeft de leerling een aandoening en/of beperking die van invloed op de studie is of kan zijn?</h4>
        <div :class="$style.conditionContainer">
          <div :class="$style.conditionInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Volgt de leerling speciaal onderwijs?</label>
            <DropDown
              :name="'speciaal-onderwijs'"
              :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
            />
          </div>
          <div :class="$style.conditionInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Heeft de leerling dyslexie?</label>
            <DropDown
              :name="'dyslexie'"
              :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
            />
          </div>
          <div :class="$style.conditionInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Heeft de leerling dyscalculie?</label>
            <DropDown
              :name="'dyscalculie'"
              :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
            />
          </div>
          <div :class="$style.conditionInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Is de leerling recent besproken in het extern zorg- en adviesteam (ZAT)</label>
            <DropDown
              :name="'dyscalculie'"
              :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
            />
          </div>
          <div :class="$style.conditionInput">
            <label :class="[$style.formSubtitle, $style.smallTitle]">Ontvangt de leerling nog andere zorg?</label>
            <DropDown
              :name="'andere-zorg'"
              :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
            />
          </div>
          <input :class="$style.formInput" v-model="andereZorg" type="text" placeholder="Zoja, welke zorg?" />
          <h4 :class="[$style.formSubtitle, $style.smallTitle]">
            Zijn er andere bijzondere persoonlijk omstandigheden waarvan de school op de hoogte moet zijn?
          </h4>
          <textarea :class="[$style.textareaInput]" v-model="bijzonderOmstandigheden" placeholder="Hieronder verstaat het Mediacollege Amsterdam bijzonderheden/beperkingen die van invloed kunnen zijn op het succesvol volgen
van de opleiding zoals o.a. epilepsie, slechthorendheid, ADHD, suikerziekte etc." rows="6"></textarea>
        </div>
      </div>
      <div :class="$style.detailsWrapper">
        <h3 :class="[$style.formSubtitle]">Uw gegevens</h3>
        <input :class="$style.formInput" v-model="naam" type="text" placeholder="Overige opleiding" />
        <div :class="$style.formInlineInput">
          <label :class="[$style.formSubtitle, $style.smallTitle]">Geslacht</label>
          <DropDown
            :name="'geslacht'"
            :options="[
                  {text: 'Man', value: 'man'},
                  {text: 'Vrouw', value: 'vrouw'},
                ]"
          />
        </div>
        <input :class="$style.formInput" v-model="functie" type="text" placeholder="Functie" />
        <input :class="$style.formInput" v-model="email" type="email" placeholder="E-mail" />
        <input :class="$style.formInput" v-model="schoolNaam" type="text" placeholder="Naam School" />
        <input :class="$style.formInput" v-model="plaats" type="text" placeholder="Plaats" />
        <input :class="$style.formInput" v-model="telefoon" type="text" placeholder="Telefoon" />
        <div :class="$style.formInlineInput">
          <label :class="[$style.formSubtitle, $style.smallTitle]">Telefonisch contact gewenst</label>
          <DropDown
            :name="'telefonisch-contact'"
            :options="[
                  {text: 'Ja', value: 'ja'},
                  {text: 'Nee', value: 'nee'},
                ]"
          />
        </div>
      </div>
      <button :class="$style.submitButton" type="submit">Aanmelden</button>
    </form>
  </div>
</template>
