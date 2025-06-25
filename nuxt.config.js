// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Welcome to SalesCreations',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      ],
      script:[
        {
          type: 'text/javascript',
          id: 'vwoCode',
          innerHTML: `
            window._vwo_code || (function() {
            var account_id=1106075,
            version=2.1,
            settings_tolerance=2000,
            hide_element='body',
            hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
            /* DO NOT EDIT BELOW THIS LINE */
            f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;display: block !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();
          `,
        }
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-graphql-client',
    'nuxt-simple-sitemap',
    'nuxt-lodash',
    ['@nuxtjs/i18n', {
      langDir: 'assets/locales/',
      defaultLocale: 'en',
      locales: [
        {
          code: 'en',
          name: 'English',
          file: 'en.json',
          description: 'English',
        },
        {
          code: 'pt-br',
          name: 'Brazilian Portuguese',
          file: 'pt-br.json',
          description: 'Brazilian Portuguese',
        }
      ],
    }],
    ['@nuxtjs/robots', {
      rules: {
        UserAgent: '*',
        Disallow: ['/*.gif', '/*.pdf', '/404.html', '/500.html'],
        Allow: ['/', '/work/', '/about/', '/experiments/', '/photograph/', '/writing/']
      }
    }],
    ['@storyblok/nuxt', {
      accessToken: process.env.ACCESS_TOKEN_SB,
      bridge: true,
      apiOptions: { region: 'eu' },
      useApiClient: true
    }],
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  runtimeConfig: {
    public:  {
      dribbbleToken: process.env.DRIBBBLE_TOKEN,
      unsplashKey: process.env.UNSPLASH_KEY,
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
      writeCodeSegment: isDev ? process.env.WRITE_CODE_SEGMENT_SANDBOX : process.env.WRITE_CODE_SEGMENT,
      'graphql-client': {
        clients: {
          github: {
            host: 'https://api.github.com/graphql',
            token: {
              value: process.env.GH_TOKEN,
              type: 'Bearer',
            },
            retainToken: true,
          }
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://salescreations.com.br',
    trailingSlash: true,
    include: [
      '/work',
      '/about',
      '/experiments',
      '/photograph',
      '/writing',
    ]
  },
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/work/',
        '/about/',
        '/experiments/',
        '/photograph/',
        '/writing/',
      ]
    }
  }
})
