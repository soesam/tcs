<template>
  </div></div>
</template>

<script>
import fb from '@/fb';

const provider = fb.auth.GoogleAuthProvider();
fb.auth().languageCode = 'en';

fb.auth().signInWithRedirect(provider);
fb.auth().getRedirectResult().then(result => {
  console.log(result)
});
</script>
