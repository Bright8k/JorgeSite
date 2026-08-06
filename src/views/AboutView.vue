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

  <section class="section section-alt contact">
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
        class="contact-form card"
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
          <textarea v-model="form.message" name="message" rows="5" required></textarea>
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
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--color-border);
}

.page-hero__lede {
  max-width: 55ch;
  font-size: 1.1rem;
}

.bio__grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.achievements {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  color: var(--color-text-dim);
}

.achievements li {
  margin-bottom: 0.5rem;
}

.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
}

.contact-info {
  margin: 1.5rem 0 0;
  display: grid;
  gap: 1rem;
}

.contact-info dt {
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--color-text-dim);
}

.contact-info dd {
  margin: 0.15rem 0 0;
  font-size: 1.05rem;
}

.contact-form {
  padding: 2rem;
  display: grid;
  gap: 1.25rem;
}

.contact-form label {
  display: grid;
  gap: 0.4rem;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.contact-form input,
.contact-form textarea {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 0.7em 0.9em;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.contact-form button {
  justify-self: start;
}

.contact-form__status {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-accent);
}

@media (max-width: 860px) {
  .bio__grid,
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
