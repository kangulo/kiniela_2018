/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/3rdpartylicenses.txt","f9d6cfd6f04d5c6d95f359a99d0d4520"],["/Dusha_-_FIFA_World_Cup_2018.b2d27c84a6b6357dc7ac.ttf","b2d27c84a6b6357dc7ac6ab222da866d"],["/Roboto-Bold-webfont.375c4f3bd35840adee24.svg","375c4f3bd35840adee24a1535bbb2018"],["/Roboto-Bold-webfont.3dcc0e0f2287e2e955cd.ttf","3dcc0e0f2287e2e955cd8ce8cb08dae0"],["/Roboto-Bold-webfont.8b18d65d6824460ad376.woff","8b18d65d6824460ad37616723e493bcd"],["/Roboto-Bold-webfont.ecdd509cadbf1ea78b8d.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/Roboto-Light-webfont.3581138bd3477ae13eca.svg","3581138bd3477ae13eca1ac9e584220a"],["/Roboto-Light-webfont.816d43bc217485bc52e3.woff","816d43bc217485bc52e309cd1b356880"],["/Roboto-Light-webfont.a990f611f2305dc12965.eot","a990f611f2305dc12965f186c2ef2690"],["/Roboto-Light-webfont.d8472f7b6012706fc028.ttf","d8472f7b6012706fc028021e5a654843"],["/Roboto-Medium-webfont.1d2af757de4340d6b644.ttf","1d2af757de4340d6b644360e517a2a47"],["/Roboto-Medium-webfont.4d9f3f9e5195e7b074bb.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/Roboto-Medium-webfont.88e897b6e48f9b57cbed.svg","88e897b6e48f9b57cbed1ad9256f18ee"],["/Roboto-Medium-webfont.b9d01ac1742192a7c9d3.woff","b9d01ac1742192a7c9d30f3fe346a9f4"],["/Roboto-Regular-webfont.30799efa5bf74129468a.eot","30799efa5bf74129468ad4e257551dc3"],["/Roboto-Regular-webfont.3e5675c89f974f7811ee.woff","3e5675c89f974f7811eeaf07e2dd5ba3"],["/Roboto-Regular-webfont.7f1320f7ec4f6716054d.ttf","7f1320f7ec4f6716054d88c33235d17b"],["/Roboto-Regular-webfont.da61d7ef302b8bf871dd.svg","da61d7ef302b8bf871dd0ae796a52f33"],["/assets/css/plugins.css","fec8117e2c4b584cc8e16b7f7768247f"],["/assets/css/styles.css","588dc49bd424bf25086134cc0bd61843"],["/assets/fonts/dusha/2018-FIFA-World-Cup-Russia-Font.png","838dc61f7fdb75dbcd21a80fb4e08774"],["/assets/fonts/dusha/Dusha_-_FIFA_World_Cup_2018.ttf","b2d27c84a6b6357dc7ac6ab222da866d"],["/assets/fonts/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["/assets/fonts/glyphicons-halflings-regular.svg","ff423a4251cf2986555523dfe315c42b"],["/assets/fonts/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["/assets/fonts/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["/assets/fonts/glyphicons-halflings-regular.woff2","68ed1dac06bf0409c18ae7bc62889170"],["/assets/fonts/roboto/Roboto-Bold-webfont.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/assets/fonts/roboto/Roboto-Bold-webfont.svg","375c4f3bd35840adee24a1535bbb2018"],["/assets/fonts/roboto/Roboto-Bold-webfont.ttf","3dcc0e0f2287e2e955cd8ce8cb08dae0"],["/assets/fonts/roboto/Roboto-Bold-webfont.woff","8b18d65d6824460ad37616723e493bcd"],["/assets/fonts/roboto/Roboto-Light-webfont.eot","a990f611f2305dc12965f186c2ef2690"],["/assets/fonts/roboto/Roboto-Light-webfont.svg","3581138bd3477ae13eca1ac9e584220a"],["/assets/fonts/roboto/Roboto-Light-webfont.ttf","d8472f7b6012706fc028021e5a654843"],["/assets/fonts/roboto/Roboto-Light-webfont.woff","816d43bc217485bc52e309cd1b356880"],["/assets/fonts/roboto/Roboto-Medium-webfont.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/assets/fonts/roboto/Roboto-Medium-webfont.svg","88e897b6e48f9b57cbed1ad9256f18ee"],["/assets/fonts/roboto/Roboto-Medium-webfont.ttf","1d2af757de4340d6b644360e517a2a47"],["/assets/fonts/roboto/Roboto-Medium-webfont.woff","b9d01ac1742192a7c9d30f3fe346a9f4"],["/assets/fonts/roboto/Roboto-Regular-webfont.eot","30799efa5bf74129468ad4e257551dc3"],["/assets/fonts/roboto/Roboto-Regular-webfont.svg","da61d7ef302b8bf871dd0ae796a52f33"],["/assets/fonts/roboto/Roboto-Regular-webfont.ttf","7f1320f7ec4f6716054d88c33235d17b"],["/assets/fonts/roboto/Roboto-Regular-webfont.woff","3e5675c89f974f7811eeaf07e2dd5ba3"],["/assets/icon-128x128.png","9f26fcca711e00da7e74735dc66b4f3b"],["/assets/icon-152x152.png","d94ed3e0f40a3b4a368a9ff93a6c70fe"],["/assets/icon-256x256.png","8f02898aeb5e9735aadd9ebfd5221961"],["/assets/img/bg-header-red.jpg","09f778b2315b2400f4ee94109032195c"],["/assets/img/bg-red.jpg","2db2f38ab51bc47b7e7aea5b1462167a"],["/assets/img/bg.jpg","13d8105bdf75ead56accba5da24db6d8"],["/assets/img/flags-news/ARG.png","2796a84a75ff8b847d563f83932b3f64"],["/assets/img/flags-news/AUS.png","2a2b482271e285227398de87a128a19f"],["/assets/img/flags-news/BEL.png","b740a0db2a82c6400e47e2df58c8dffc"],["/assets/img/flags-news/BRA.png","accf99695f4a6621eba0298f179c12da"],["/assets/img/flags-news/COL.png","06de356603da3ef79e417c6dd4711ab2"],["/assets/img/flags-news/CRC.png","fc619fc9ab9cad8ce0667426d727f6bc"],["/assets/img/flags-news/CRO.png","cbc90d71e7c599496d0dd26e98711076"],["/assets/img/flags-news/DEN.png","7b59013070a19386feece3f35c5adf9d"],["/assets/img/flags-news/EGY.png","e743490f02cbf1d55670a105989a77dd"],["/assets/img/flags-news/ENG.png","0fbfe24e4902ac4a0fc13a4f76b76454"],["/assets/img/flags-news/ESP.png","dcf2a02e4c4f962ea61f3d187262a14a"],["/assets/img/flags-news/FRA.png","b6ed44ada85c82fa9682621555a519bc"],["/assets/img/flags-news/GER.png","524e6954b5620d609a8c9649874dc7d0"],["/assets/img/flags-news/IRN.png","cd3b6cb53520bafa6057d6277ec22163"],["/assets/img/flags-news/ISL.png","f1361663ecee58468a0db718602288b6"],["/assets/img/flags-news/JPN.png","32543d4927038300e79aecdc49096604"],["/assets/img/flags-news/KOR.png","61099d9d9ac2760e0259ee7041bedabb"],["/assets/img/flags-news/KSA.png","40f158917b4dc82705f8251459b9d761"],["/assets/img/flags-news/MAR.png","f91f46803f4d3abc7de72cf65ec9049f"],["/assets/img/flags-news/MEX.png","2aef23f9bcddd3b761f7f6d2256650df"],["/assets/img/flags-news/NGA.png","4bea838c3741a673111b60ec378cfe10"],["/assets/img/flags-news/PAN.png","73ca09981bbbbec34f48f194496fe3dd"],["/assets/img/flags-news/PER.png","e7d48081a13354f85937e1f07378c646"],["/assets/img/flags-news/POL.png","3f65add0c738aec377f2c9439bb5cda0"],["/assets/img/flags-news/POR.png","82f648733cd5fb69a157d0a685f81f46"],["/assets/img/flags-news/RUS.png","2ee5d8d32509b813361e01eed6df79dd"],["/assets/img/flags-news/SEN.png","425b013dec7daa10116ca9f7f64f068f"],["/assets/img/flags-news/SRB.png","efcc220b2261147f2fb6fb60616c8275"],["/assets/img/flags-news/SUI.png","33c150948c2ae907c5a5f9747d761920"],["/assets/img/flags-news/SWE.png","3924f2370fa5831a3fd721ce1cca9bfe"],["/assets/img/flags-news/TUN.png","157fe36b28df596cbc1386f17552c71c"],["/assets/img/flags-news/URU.png","91ad6f2d760cbb1e6230634b733427f0"],["/assets/img/flags/arg.png","895e3d46cea0dfcca937fca23dbe8adc"],["/assets/img/flags/aus.png","85d79ae570db9a2685a56567bce3b8cf"],["/assets/img/flags/bel.png","e2df5c49ccc556ddcc8bdb5ec9d780b4"],["/assets/img/flags/bra.png","f6543f6cbf95084756260660283f2462"],["/assets/img/flags/col.png","22256d11c69397b910579c4497dcd86c"],["/assets/img/flags/crc.png","378f7ff4f797bf36e590a11244692659"],["/assets/img/flags/cro.png","f512d41393181ee0b1067344b0bfe981"],["/assets/img/flags/den.png","289b37ad4ca0685e4608865b19266a78"],["/assets/img/flags/egy.png","e65ffdf9f70cc14cb837e1e4e4f8a2e8"],["/assets/img/flags/eng.png","dbc95853927d8d8568d05235a613d512"],["/assets/img/flags/esp.png","2ff85a71e4c33a6923593f28df035362"],["/assets/img/flags/fra.png","e9674df5c74a062d54dcd662a2f8dad2"],["/assets/img/flags/ger.png","b0ddbf4453f3b2fabc6334d4ab867a53"],["/assets/img/flags/irn.png","d0a4f310e4f8a19b9c06042b21c9a768"],["/assets/img/flags/isl.png","c10e82f1d342609cff8f818dba5ba8a2"],["/assets/img/flags/jpn.png","4de7d1d9facf636e788dbc6f642873f8"],["/assets/img/flags/kor.png","82687f36a7aebc74c5cd6f3da66a385c"],["/assets/img/flags/ksa.png","936e95c0ce866325db95c816b3a77751"],["/assets/img/flags/mar.png","0c48cdef0f966a694e34bbb40632904a"],["/assets/img/flags/mex.png","dfec48092ad31a10256dc3861e3c7e4a"],["/assets/img/flags/nga.png","bbf235a04ce001d5994634dd9a404c1f"],["/assets/img/flags/pan.png","4fca40fba6c7a5b0e5ff983154f9ee0f"],["/assets/img/flags/per.png","9ce31808da67326a3ea297e2e36d192d"],["/assets/img/flags/pol.png","f1748bd6b39ffc473a23498f04700e2e"],["/assets/img/flags/por.png","aa612ab0bfb091900b28b3bf2490c1f6"],["/assets/img/flags/rus.png","70ca38be1b420d55286798a8ffe0814c"],["/assets/img/flags/sen.png","3b6a865a475a3c47aec2c811ae0e999c"],["/assets/img/flags/srb.png","b2b73a282ac27b0af6fb1abc45954b25"],["/assets/img/flags/sui.png","b0508d82ba3cdf76e1a661cf11ae1816"],["/assets/img/flags/swe.png","6d1a393f771325f77abca89fe1d6eb23"],["/assets/img/flags/tun.png","7161e3b36d56ba21bf28b268ef63864a"],["/assets/img/flags/uru.png","1e5bd024cd483a8929b8a5ab91323bee"],["/assets/img/header-left.png","3b4f56f79ec0f5854060a28df9711982"],["/assets/img/header-mid.png","64ce455642088d325e89423c126e8e7e"],["/assets/img/header-right.png","491cbc8c47d68f23c5a737e78b4b73ba"],["/assets/img/icons/fullscreen.png","fe651431022882ade31a6618b2939bf9"],["/assets/img/icons/fullscreen@2x.png","b6e6893aeecc23b72e0e4738189afe6b"],["/assets/img/icons/pause.png","67021b17cb50a34629df0fe58b016cc1"],["/assets/img/icons/pause@2x.png","1e35cbaa28aa1c992a7099f6945944b9"],["/assets/img/icons/play.png","98c526d2a3ee05362f934b05cb8ea7e5"],["/assets/img/icons/play@2x.png","853302d4df9be0667d8faee2c7555a72"],["/assets/img/icons/speaker-2.png","f7adb673ada7c570fd47dd71cf17ab46"],["/assets/img/icons/speaker-2@2x.png","7a1d6f3da04f368bb1fc00ef0b18a2f9"],["/assets/img/icons/speaker.png","88a8cdf6a66bce867c5420c54a097052"],["/assets/img/icons/speaker@2x.png","a0eed884552fa27b323d1d0d6905fd6b"],["/assets/img/icons/weather/0.png","532de5be28019609ad36547140aff7cd"],["/assets/img/icons/weather/0@2x.png","f051903d9fda477aaff5475018e9ea74"],["/assets/img/icons/weather/1.png","c49f11633cdb0009f776aed9458059d9"],["/assets/img/icons/weather/18.png","21397004430c9751a9347272e85428bb"],["/assets/img/icons/weather/18@2x.png","e4797a8df6bf97955e09f534e00cd133"],["/assets/img/icons/weather/19.png","6c24b746a00c88aeb9c5547565bc5fc7"],["/assets/img/icons/weather/19@2x.png","57bb7ddef8872dc5820039ea902adfa0"],["/assets/img/icons/weather/1@2x.png","36f3d5d5ad1af454a88c70c07e0bc9ec"],["/assets/img/icons/weather/2.png","8a1716df49160b5169c8bb5520fc5336"],["/assets/img/icons/weather/24.png","fc12d2e8f5d9d4ee45e6b526e24ac4c4"],["/assets/img/icons/weather/24@2x.png","6d6d4658bd83c9652fdb36143c61cc46"],["/assets/img/icons/weather/26.png","ba3df072d903d218be0c4b1e50c01fe7"],["/assets/img/icons/weather/26@2x.png","55f4ea065686d7d8c5c31225ecdb780f"],["/assets/img/icons/weather/27.png","24f2a71da5096af8440610f421fdacee"],["/assets/img/icons/weather/27@2x.png","5cd2ca3a8b67954fb1c2f91147c55034"],["/assets/img/icons/weather/28.png","06eee8e14140e75e3ef153c3109a5eaf"],["/assets/img/icons/weather/28@2x.png","bc2e56dbe1ddcb4b131294a9c935e94f"],["/assets/img/icons/weather/2@2x.png","d383e03c2ef724188560090ff0c0ce24"],["/assets/img/icons/weather/3.png","5f30c9670c6f86f76c549f15700ac35f"],["/assets/img/icons/weather/31.png","22ab46df08715f7d764039ff931ab6f1"],["/assets/img/icons/weather/31@2x.png","089e54308fc1f87e9ce1cfef9f62bd8f"],["/assets/img/icons/weather/32.png","07a5d29293bfb4b79dc2f62902071436"],["/assets/img/icons/weather/32@2x.png","1c91e5ecf5651dfaa47a5c3aab8c56b0"],["/assets/img/icons/weather/3@2x.png","bb3c16d2c7a6cd759115cec4c858bdec"],["/assets/img/icons/weather/5.png","35aa02eff1e1331ce190a7dc36486083"],["/assets/img/icons/weather/5@2x.png","4f037b96d1ca4ce11f8dc5cc44cfdd4f"],["/assets/img/icons/weather/9.png","cfbe66da98a58d5b70f322ad69f0bd30"],["/assets/img/icons/weather/9@2x.png","0dc52c660912fc4fbe58cfb1a20d13dc"],["/assets/img/profile-menu.png","afc27090744412db6c7a5def5fd8523e"],["/assets/img/russia-2018-country-groups.jpg","e997ecc365f4376368447a37f052cbfc"],["/assets/img/select.png","49ba2d14cefacfa9e7a0604e1121cc21"],["/assets/img/select@2x.png","a0bce7e2e7cd47ff73b45979c9d08ed5"],["/assets/js/plugins.js","451958fd1beadda29a54f32a3233bc5b"],["/bg-header-red.09f778b2315b2400f4ee.jpg","09f778b2315b2400f4ee94109032195c"],["/favicon.ico","b9aa7c338693424aae99599bec875b5f"],["/glyphicons-halflings-regular.68ed1dac06bf0409c18a.woff","68ed1dac06bf0409c18ae7bc62889170"],["/glyphicons-halflings-regular.68ed1dac06bf0409c18a.woff2","68ed1dac06bf0409c18ae7bc62889170"],["/glyphicons-halflings-regular.7ad17c6085dee9a33787.eot","7ad17c6085dee9a33787bac28fb23d46"],["/glyphicons-halflings-regular.e49d52e74b7689a0727d.ttf","e49d52e74b7689a0727def99da31f3eb"],["/glyphicons-halflings-regular.ff423a4251cf29865555.svg","ff423a4251cf2986555523dfe315c42b"],["/index.html","b20e7591b8502e69d93e7fb27298e716"],["/inline.318b50c57b4eba3d437b.bundle.js","6eaa1608803b51f7d836604d9585670d"],["/main.a8a412dd415dfd6bc79e.bundle.js","ace3439b30f99ef118d8f70f030d248d"],["/manifest.json","c1f7f9a331106539aa9e026c0cbe8ffd"],["/polyfills.fb8ad884215c65546efb.bundle.js","bce3cceb140b863ff4732be24b500ac3"],["/profile-menu.afc27090744412db6c7a.png","afc27090744412db6c7a5def5fd8523e"],["/scripts.5b80d8ad2b7486134a9f.bundle.js","7e0854bf597d2cac16cc1f7049d47ece"],["/styles.8962d6f5ee718e578d67.bundle.css","eb36d7511f831e8a5e3487e124c4db9f"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







