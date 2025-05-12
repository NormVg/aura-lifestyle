<template>
  <section class="stay-connected">
    <h2 class="section-title">Stay Connected</h2>
    <p class="section-description">Follow our journey and get the latest updates</p>

    <div class="social-updates">
      <!-- YouTube Updates -->
      <div class="social-card youtube-card">
        <div class="social-header">
          <div class="social-icon youtube-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </div>
          <h3>YouTube</h3>
        </div>
        <div class="social-content">
          <div class="update-preview">
            <div class="preview-image youtube-preview"></div>
            <div class="preview-info">
              <h4>Introducing Aura AI</h4>
              <p>Watch our latest video showcasing the power of Aura AI and how it's revolutionizing the way we work.</p>
            </div>
          </div>
          <div class="update-meta">
            <span class="update-date">Posted 2 days ago</span>
            <span class="update-views">12.5K views</span>
          </div>
        </div>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-footer">
          <span>Visit our YouTube channel</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

      <!-- Twitter Updates -->
      <div class="social-card twitter-card">
        <div class="social-header">
          <div class="social-icon twitter-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </div>
          <h3>Twitter</h3>
        </div>
        <div class="social-content">
          <div class="twitter-updates">
            <div class="twitter-update">
              <p>"We're excited to announce that Aura AI will be launching next month! Join our waitlist to be among the first to experience the future of AI. #AuraAI #AI #Innovation"</p>
              <div class="update-meta">
                <span class="update-date">Posted 3 days ago</span>
                <span class="update-engagement">245 likes</span>
              </div>
            </div>
            <div class="twitter-update">
              <p>"Our team is working hard to bring you the most intuitive AI experience. Stay tuned for more updates! #BuildingInPublic #AuraAI"</p>
              <div class="update-meta">
                <span class="update-date">Posted 1 week ago</span>
                <span class="update-engagement">189 likes</span>
              </div>
            </div>
          </div>
        </div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-footer">
          <span>Follow us on Twitter</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StayConnected'
}
</script>

<style scoped>
.stay-connected {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.section-description {
  text-align: center;
  color: var(--muted-foreground);
  margin-bottom: 2.5rem;
  font-size: 1.125rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.social-updates {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.social-card {
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.social-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.youtube-card {
  border-top: 3px solid var(--youtube-color);
}

.twitter-card {
  border-top: 3px solid var(--twitter-color);
}

.social-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--border);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
}

.youtube-icon {
  background: rgba(255, 0, 0, 0.1);
  color: var(--youtube-color);
}

.twitter-icon {
  background: rgba(29, 161, 242, 0.1);
  color: var(--twitter-color);
}

.social-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.social-content {
  padding: 1.5rem;
  flex: 1;
}

.update-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.preview-image {
  width: 100%;
  height: 160px;
  border-radius: var(--radius);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.youtube-preview {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://via.placeholder.com/600x400/18181b/a99cf6?text=Aura+AI+Video');
}

.preview-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.preview-info p {
  color: var(--muted-foreground);
  font-size: 0.9375rem;
  margin-bottom: 0;
}

.update-meta {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.875rem;
}

.twitter-updates {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.twitter-update {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.twitter-update:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.twitter-update p {
  color: var(--foreground);
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
}

.social-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.youtube-card .social-footer {
  color: var(--youtube-color);
}

.twitter-card .social-footer {
  color: var(--twitter-color);
}

.social-footer:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

.social-footer span {
  font-weight: 500;
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .update-preview {
    flex-direction: row;
  }

  .preview-image {
    width: 180px;
    height: 120px;
    flex-shrink: 0;
  }
}

@media (max-width: 640px) {
  .social-updates {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .social-content {
    padding: 1.25rem;
  }
}
</style>
