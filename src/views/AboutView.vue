<script setup>
import { reactive, ref } from 'vue'

const achievements = [
  'Placeholder achievement — league or team honor',
  'Placeholder achievement — record or milestone',
  'Placeholder achievement — modeling campaign or feature',
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  'bot-field': '',
})

const status = ref('')
const isSubmitting = ref(false)

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

async function handleSubmit() {
  isSubmitting.value = true
  status.value = ''
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({ 'form-name': 'contact', ...form }),
    })
    status.value = "Thanks — Jorge's team will get back to you soon."
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    status.value = 'Something went wrong sending that — please email booking@jorgedelanuez.com directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">About</p>
      <h1>Jorge De La Nuez</h1>
      <p class="page-hero__lede">
        Two disciplines, one standard: show up prepared, perform under pressure,
        and represent the brand well — on the field and in front of the lens.
      </p>
    </div>
  </section>

  <section class="section bio">
    <div class="container bio__grid">
      <div class="placeholder-img" style="--ratio: 4 / 5">
        <span>Portrait</span>
      </div>
      <div>
        <p class="eyebrow">Bio</p>
        <h2>The Story</h2>
        <p>
          Placeholder biography copy. Introduce Jorge's background, hometown, and how
          he got started in football and modeling — the throughline between
          discipline as an athlete and presence as a model.
        </p>
        <p>
          Add a second paragraph here covering current focus, goals, and what makes
          his combination of sport and fashion distinct.
        </p>

        <h3>Achievements</h3>
        <ul class="achievements">
          <li v-for="item in achievements" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="media-break bleed">
    <span>Full-Bleed Portrait</span>
  </section>

  <section class="section section-invert contact">
    <div class="container contact__grid">
      <div>
        <p class="eyebrow">Get in Touch</p>
        <h2>Booking &amp; Contact</h2>
        <p>
          For football recruitment, modeling bookings, or press inquiries, reach out
          using the form or contact details below.
        </p>
        <dl class="contact-info">
          <div>
            <dt>Email</dt>
            <dd>booking@jorgedelanuez.com</dd>
          </div>
          <div>
            <dt>Agency</dt>
            <dd>TBD</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>City, State</dd>
          </div>
        </dl>
      </div>

      <form
        class="contact-form"
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <p class="visually-hidden">
          <label>
            Don't fill this out if you're human: <input v-model="form['bot-field']" name="bot-field" />
          </label>
        </p>
        <label>
          Name
          <input v-model="form.name" type="text" name="name" required />
        </label>
        <label>
          Email
          <input v-model="form.email" type="email" name="email" required />
        </label>
        <label>
          Subject
          <input v-model="form.subject" type="text" name="subject" />
        </label>
        <label>
          Message
          <textarea v-model="form.message" name="message" rows="4"></textarea>
        </label>
        <button type="submit" class="btn btn-solid" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending…' : 'Send Message' }}
        </button>
        <p v-if="status" class="contact-form__status">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 5rem 0 3.5rem;
}

.page-hero__lede {
  max-width: 55ch;
  font-size: 1.1rem;
}

.bio__grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.achievements {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
}

.achievements li {
  padding: 0.9rem 0;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-dim);
}

.achievements li:last-child {
  border-bottom: 1px solid var(--color-border);
}

.media-break {
  position: relative;
  height: 65vh;
  min-height: 400px;
  background: linear-gradient(200deg, var(--color-surface) 0%, var(--color-bg-alt) 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem 2.5rem;
}

.media-break span {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
}

.contact-info {
  margin: 2rem 0 0;
  display: grid;
  gap: 1.25rem;
}

.contact-info dt {
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-text-dim);
}

.contact-info dd {
  margin: 0.3rem 0 0;
  font-size: 1.1rem;
  font-family: var(--font-display);
}

.contact-form {
  display: grid;
  gap: 1.75rem;
}

.contact-form label {
  display: grid;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.contact-form input,
.contact-form textarea {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-border);
  border-radius: 0;
  padding: 0.6em 0;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-text);
}

.contact-form button {
  justify-self: start;
  margin-top: 0.5rem;
}

.contact-form__status {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-dim);
}

@media (max-width: 860px) {
  .bio__grid,
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
