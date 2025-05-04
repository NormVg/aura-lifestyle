<template>
  <div class="container">
    <div class="background">
      <div class="dot-grid"></div>
      <div class="gradient-blur"></div>
    </div>

    <header>
      <div class="logo">
        <img :src="AuraLogo" alt="" width="50px">
        <span>Aura<span class="highlight">:LifeStyle</span></span>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Experience the future of everyday <br><span class="gradient-text">artificial intelligence</span></h1>
          <p class="hero-description">
            Join our exclusive waitlist to be among the first to access Aura, <br> The AI Interaction Workspace OS that's changing how we interact with machines, making it more of a partner.
          </p>
        </div>

        <div class="card">
          <div class="card-content">
            <h2>Join the waitlist</h2>
            <p>Be the first to know when we launch</p>

            <form @submit.prevent="submitEmail" class="form">
              <div class="form-group" :class="{ 'error': emailError }">
                <label for="email">Email address</label>
                <div class="input-container">
                  <input
                    id="email"
                    type="email"
                    v-model="email"
                    placeholder="name@example.com"
                    required
                    @input="emailError = ''"
                  />
                </div>
                <p class="error-message" v-if="emailError">{{ emailError }}</p>
              </div>

              <button type="submit" :disabled="isSubmitting" class="button">
                <span v-if="!isSubmitting">Join Waitlist</span>
                <span v-else class="loader"></span>
              </button>
            </form>

            <div class="success-message" v-if="submitted">
              <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p>You're on the list! We'll notify you when Aura:LifeStyle  is ready.</p>
            </div>
          </div>

          <div class="card-decoration">
            <div class="decoration-circle"></div>
            <div class="decoration-line"></div>
          </div>
        </div>
      </section>

      <h2 class="section-title">Explore Aura AI's Features</h2>

      <section class="features">
        <!-- Advanced AI Card -->
        <div class="feature-card ai-card">
          <div class="card-header">
            <div class="feature-icon ai-icon">
              <svg xmlns="http://www.w3.org/2000/svg"width="25" height="25"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,136a40,40,0,1,1-40,40v-6.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,136a40,40,0,1,0,40,40v-6.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,172H64A48,48,0,0,1,48,78.73V72a40,40,0,0,1,80,0V176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,172h8a48,48,0,0,0,16-93.27V72a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,112h-4a28,28,0,0,1-28-28V80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,112h4A28,28,0,0,0,88,84V80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            </div>
            <h3>Advanced AI</h3>
          </div>
          <div class="card-body">
            <p>Our cutting-edge neural networks adapt to your needs, providing personalized assistance and insights that evolve with you.</p>
            <ul class="feature-list">
              <li>Adaptive Dynamic Memory</li>
              <li>Contextual understanding</li>
              <li>Personalized responses</li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="learn-more">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Workspace Card -->
        <div class="feature-card workspace-card">
          <div class="card-header">
            <div class="feature-icon workspace-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3>Workspace</h3>
          </div>
          <div class="card-body">
            <p>Seamlessly organize your projects, tasks, and ideas in a customizable environment designed for maximum productivity.</p>
            <ul class="feature-list">
              <li>Canvas Workspace</li>
              <li>Real-time collaboration</li>
              <li>Cross-device synchronization</li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="learn-more">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Plugins Card -->
        <div class="feature-card plugins-card">
          <div class="card-header">
            <div class="feature-icon plugins-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3>Plugins</h3>
          </div>
          <div class="card-body">
            <p>Extend Aura AI's capabilities with a growing ecosystem of plugins that integrate with your favorite tools and services.</p>
            <ul class="feature-list">
              <li>Third-party App integrations</li>
              <li>Custom workflow automation</li>
              <li>MCP server</li>
            </ul>
          </div>
          <div class="card-footer">
            <span class="learn-more">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </section>
    </main>

    <div class="decorative-elements">
      <div class="decorative-element" v-for="(element, index) in decorativeElements" :key="index"
           :style="{ top: element.top + '%', left: element.left + '%', width: element.size + 'px', height: element.size + 'px', animationDelay: element.delay + 's' }">
      </div>
    </div>

    <footer>
      <a href="https://thealphaones.com" target="_blank">
      <div class="footer-content">
          <p class="ita">TheAlphaOnes</p>
        </div>
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import AuraLogo from "./assets/logo.svg"

const email = ref('');
const emailError = ref('');
const isSubmitting = ref(false);
const submitted = ref(false);
const decorativeElements = ref([
  { top: 15, left: 85, size: 20, delay: 0 },
  { top: 25, left: 90, size: 25, delay: 0.5 },
  { top: 35, left: 88, size: 15, delay: 1 },
  { top: 45, left: 92, size: 30, delay: 1.5 },
  { top: 55, left: 87, size: 18, delay: 2 }
]);

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const submitEmail = () => {
  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address';
    return;
  }

  isSubmitting.value = true;

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
    email.value = '';

    // Reset success message after 5 seconds
    setTimeout(() => {
      submitted.value = false;
    }, 5000);
  }, 1500);
};
</script>

<style>
:root {
  --background: #09090b;
  --foreground: #f8f9fa;
  --muted: #71717a;
  --muted-foreground: #a1a1aa;
  --card: #18181b;
  --card-foreground: #f8f9fa;
  --border: #27272a;
  --input: #27272a;
  --primary: #a99cf6;
  --primary-foreground: #09090b;
  --secondary: #27272a;
  --secondary-foreground: #f8f9fa;
  --accent: #a99cf6;
  --accent-foreground: #09090b;
  --destructive: #ef4444;
  --destructive-foreground: #f8f9fa;
  --ring: #a99cf6;
  --radius: 0.5rem;

  /* Feature card specific colors */
  --ai-color: #a99cf6;
  --workspace-color: #64dfdf;
  --plugins-color: #ff9e64;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  font-family: "K2D", sans-serif;

}

body {
  background-color: var(--background);
  color: var(--foreground);
  line-height: 1.6;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.dot-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.5;
}

.gradient-blur {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(169, 156, 246, 0.15) 0%, rgba(169, 156, 246, 0.05) 40%, transparent 70%);
  filter: blur(100px);
  opacity: 0.6;
  border-radius: 50%;
}

header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.logo svg {
  width: 2rem;
  height: 2rem;
}

.logo .highlight {
  color: var(--primary);
}

main {
  flex: 1;
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}

.hero-content {
  text-align: center;
  /* max-width: 800px; */
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary) 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--muted-foreground);
  max-width: 800px;
  margin: 0 auto;

}

.card {
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-content {
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  opacity: 0.1;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid var(--primary);
}

.decoration-line {
  position: absolute;
  bottom: -30%;
  left: -30%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--primary);
}

h2 {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
}

.card p {
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
}

.input-container {
  position: relative;
  border-radius: var(--radius);
  border: 1px solid var(--input);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;
}

.input-container:focus-within {
  border-color: var(--ring);
  box-shadow: 0 0 0 2px rgba(169, 156, 246, 0.25);
}

.form-group.error .input-container {
  border-color: var(--destructive);
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: var(--foreground);
  font-size: 1rem;
  outline: none;
}

input::placeholder {
  color: var(--muted);
}

.error-message {
  color: var(--destructive);
  font-size: 0.875rem;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background: rgba(169, 156, 246, 0.9);
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(169, 156, 246, 0.25);
}

.button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius);
  animation: fadeIn 0.3s ease;
  margin-top: 10px;
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  flex-shrink: 0;
}

.success-message p {
  margin-bottom: 0;
  color: #10b981;
}

/* Feature Cards */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--border);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
}

.ai-icon {
  background: rgba(169, 156, 246, 0.1);
  color: var(--ai-color);
}

.workspace-icon {
  background: rgba(100, 223, 223, 0.1);
  color: var(--workspace-color);
}

.plugins-icon {
  background: rgba(255, 158, 100, 0.1);
  color: var(--plugins-color);
}

.card-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.card-body {
  padding: 1.5rem;
  flex: 1;
}

.card-body p {
  color: var(--muted-foreground);
  margin-bottom: 1.25rem;
}

.feature-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  color: var(--muted-foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-list li::before {
  content: "•";
  display: inline-block;
  margin-right: 0.5rem;
}

.ai-card .feature-list li::before {
  color: var(--ai-color);
}

.workspace-card .feature-list li::before {
  color: var(--workspace-color);
}

.plugins-card .feature-list li::before {
  color: var(--plugins-color);
}

.card-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: none;
}

.card-footer:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

.ai-card .card-footer {
  color: var(--ai-color);
}

.workspace-card .card-footer {
  color: var(--workspace-color);
}

.plugins-card .card-footer {
  color: var(--plugins-color);
}

.learn-more {
  font-weight: 500;
  font-size: 0.875rem;
}

/* Border accents for each card */
.ai-card {
  border-top: 3px solid var(--ai-color);
}

.workspace-card {
  border-top: 3px solid var(--workspace-color);
}

.plugins-card {
  border-top: 3px solid var(--plugins-color);
}

.decorative-elements {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.decorative-element {
  position: absolute;
  border-radius: 8px;
  background: var(--primary);
  box-shadow: 0 0 15px rgba(169, 156, 246, 0.7);
  animation: float 5s infinite ease-in-out;
}

footer {
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

a {
  text-decoration: none
}

.footer-content {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--muted-foreground);
  transition: all ease-in-out 300ms;

}

.footer-content:hover{
  color: var(--foreground);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(9, 9, 11, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-foreground);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive styles */
@media (min-width: 768px) {
  header {
    padding: 2rem;
  }

  main {
    padding: 3rem 2rem;
  }

  .hero {
    gap: 4rem;
    margin-bottom: 6rem;
  }

  h1 {
    font-size: 4.5rem;
  }

  .hero-description {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
