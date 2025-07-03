'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2645dcad29da15f9748151cd45c0c255",
"version.json": "d77bb970417b5538d6ef6a070b0c8d31",
"index.html": "68c443ce65fe7ead90d7cf279b5cd452",
"/": "68c443ce65fe7ead90d7cf279b5cd452",
"main.dart.js": "72c3e09a70503baa3146f9bea61a125d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e257e44f38c2533d9ef42f6f9bc54fcf",
".git/ORIG_HEAD": "71928ef1552b613a773915d5c8e2faa8",
".git/config": "1bf7597a8c27d22dfa4f3f1057e16efe",
".git/objects/03/f51a78e470ad75982a23acf1c5a3266e07c79c": "704d5185aaef0c387a724fb474faae57",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/b6e49f5b71168de3af0a02407d896a94c34502": "64a0b229b4fd04343dbd3ec409e2c65c",
".git/objects/9e/e97a970ed2c7ae8f5949e901fbe15142e47b1d": "dfc4d20de2ca74e81aa36969a92f8e62",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/bc52fafd8e36e61da15abd6df39831ac5e5cfd": "973f36499305a7a2362658ac8744e39f",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/05/6c5dee09dee7c974a99aaaf7bf2a228369d7f7": "9d1bf6308d6b4a5b8dca77d61d02889a",
".git/objects/05/462aa44d640c32c7c03b4eb7921ceae30c9dfc": "ef07a9822a2a4b2f2db881a0db4ee848",
".git/objects/9d/22b5d8e16826fe351b35106d86917404bcb74c": "3fce8ef5650ef1eb531df9c8c3551232",
".git/objects/9c/8948fe5f33ad8eec9d40e5868fca3baa137789": "d8eff000618cad7d808bf803e9245314",
".git/objects/b5/e6dc199399f0973fd75fe91d2fa651f8540c1d": "dd629da4a35c605deea72f7236285b5f",
".git/objects/ad/bb3b0fd7c3663c6f2bd8a6ea9b700da051220a": "54b22a3653873c42301507838867ac52",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/12e2269a9962a463fce62d065e89fd508008ef": "b82b40a94ae8118d57faff5c33af3bc3",
".git/objects/df/5c6f637194b91f42b8697064b91404c5928ed9": "d45da4e0eaecbff3d1a1f5d412d3a5a5",
".git/objects/da/97bc93ce4bf76e0d5241f071f7f5f44d83e958": "b3c3bc9b9488973dca641563b411e6ee",
".git/objects/b4/cfc1e2a6c5164fe609a9676fcdee5d5f2c9f4f": "07dce8f72e6b3994674182291e70844a",
".git/objects/a5/aea1e0dfbf6c5b724a81e8a9010a5018ff820c": "c0278155985a0b7c9537280d194ef60f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/5185d4016479a49faf86c6bf63085f1190116f": "8fbacc6a22499ddec7040904849f4cce",
".git/objects/fc/c913ccefd8482aa9d73cb6fb37273862c2ce66": "fee106e54363c2f86cdcf7eccf4b6ec4",
".git/objects/fd/10299434ad575430b0c2d5ad480785367b2eae": "2cf05fa6e1a5959b2a24309141b73869",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7bdd9d61ffae87b4bd71ad2480042dc359e7bd": "47b2f90f4dcebd1c1857b2d2c3ba74cf",
".git/objects/f5/75ef4497f89006c3d1c93b12ba83d0bf531483": "0a19a6cbdb8fa3c7576a476d2ea15842",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/57d7ed3a593a06b30bdb9f56151b3ac5f7cf8e": "f9b3a56e7297dbd6eaf0bd15f1f7519a",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/4f5a4c66b4479928627e9944c656571653700d": "0f70f957542491d3ce4c8194ede7872a",
".git/objects/fb/cdd51d7d036d6f03db3404b5dace265a9c5c0d": "a66f1c99786dcbda674513f7e8afc2c9",
".git/objects/ed/7336f47306138e508bf857e2266afa92902556": "8bde10e7787146a2831e5ffa894a4cdd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/42/94cec677ad64c5af3ad7651ff469c16169b092": "cd2609b64ea6e6cbc25b131ce27ed214",
".git/objects/73/37086cb143e90ce59f2606d853cca9fff5ed37": "ae81c823eb3d1a74a67d5a358c36108e",
".git/objects/80/68427ef98de243217935080ab1ca5c092971ad": "8dc41fc09eb43a4a85d26b1c86316e16",
".git/objects/74/99ae493546304de3d684fb4c0e4037f0ea84ee": "d690f95d540ab90d6883ead48ac96bc5",
".git/objects/17/09c35d57c563b8f08e3aa6d9e01f4a7245638f": "eea8d904dfa8e3fee266a5a8a484bb08",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/4dd8ba0bef9cc593b282f29d43eb130dd82b50": "6a0f5019aacf174682454cedc5f579d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/4a3a2ff383ef2f3098bf6ac018479f0c23e387": "0fb3e3391090ce1f8d36147e3f7357dc",
".git/objects/86/f7093f98047f50352c971778d203f231194ec1": "2410a245e921ea625d2e33cac8ff6007",
".git/objects/2a/91f47c60e2f4ce7216fbe3d397df7e18209af3": "73c2e4e4512ebb64e790c4eb6e12bd16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5fb9e5c238bf4237aaf40f17e34f1e2d58a4b9": "c6640b9408f6cb1997fd20e2e2597091",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/3f/139a1251b27e037543414ed4e3f1fd5aa3d7dc": "99d97d3c119427f2afab58278f05151f",
".git/objects/5e/37d72002e4eb1af8ff69a41a39934f79d03580": "05c640bbed3c238382ffdf48e237130b",
".git/objects/52/3eca6860d9bc500081a5c931d375dacbf05629": "1160584d9a1f8bdf92bcc83ee016e3f8",
".git/objects/55/a222d9ae3efb5689b31526fd34ac495f91cf7e": "aad35e26b5378c94b07fe90834f0b3b1",
".git/objects/55/5aaffa3d43904190515f6c151582ad2e65378e": "6d063185ba3a853cc9aeee11c54ea782",
".git/objects/55/61ddb1acf0cc9e042074a78b8540fb29461136": "7152ff4557ea29aceec2be752997d62b",
".git/objects/0f/cfd43e9bae8210611b3547b8f683dadc80a91f": "1933424e3c69374f43cca73952ef19d3",
".git/objects/64/d49a5058e509f35ad057b7fab2f2f179555ce2": "1119a3c55118d62e3f3c22941ac534f1",
".git/objects/bf/fdb17e77e1936842f89fb7ce995664f28b5b57": "c5a3c4caaee1d28ecddd058d2ce4b9d8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/64d5586cba4fe6d8be904875bc3152f0aa576e": "6d313b7d9f475d25969cfe2cd9fe0f42",
".git/objects/dd/dd1cbd170c1d5700cb5087bb4e2f26af3eede8": "5f35ea48c6e129a36f54190cf578daa7",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d2/2c4e0ebd7a887437cdd662f533b700b3e4e617": "73ebb01cd021b8fabb18c794d6bfdedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/e9ef7c2d7d0d6a15d3c45f9d1988091dbbce8b": "add48c000f32b67115155e3ab7a887df",
".git/objects/cd/292de1aa8fb991e34fb0d8434576c7d389c054": "e9554e90611888019ed757dd2ef02d6f",
".git/objects/f9/88674483eb3a91b911637ab52de1d332a9d9e9": "871e42ba10c6596e0efdd85e26b536b3",
".git/objects/f9/6638758ef551132389833f97c6ee32768b896d": "53d76f4d5de91f8bc06618d1168aa90e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/59d1a4c27cbc23c7c11214e0deb4393f41f0e2": "c0bd52e0dd0fcf06e7ed8f4aa0d7a633",
".git/objects/e0/77b11f332952ccc79603cf58420d287d7d5586": "3a5e59dc4d20a0cfcba8b5dc20538a30",
".git/objects/e0/e9e2d67c320c867f017f17791d550e9015e2a2": "be2ceebd24315a2b2c35c89c71a5caa4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/336cefff6db5777b97142dcbf4425e7d3289f7": "ded0b684207fdccad68f052ddff63ba1",
".git/objects/79/0931c54704640cdbb19ad647e550c43077d4f3": "cb5f347de783fe1c5e979bd99eeafac6",
".git/objects/4f/acc436c920f702f9a41638dcabc843f2b2472a": "97c343b067c20da0c4a3077839f00121",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/7bb28c9b5d9a71ad7dee78c05ba5084a75e61c": "f750f517d13cc594769bb8afe56ede09",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f41dfd8e16365cf459453e04d46cfaf5",
".git/logs/refs/heads/main": "f41dfd8e16365cf459453e04d46cfaf5",
".git/logs/refs/remotes/origin/main": "d2957e7c35ba1ef3df93ac3afc9e0a9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ca6ef0e631bcc80506e65ec82bb1145f",
".git/refs/remotes/origin/main": "ca6ef0e631bcc80506e65ec82bb1145f",
".git/index": "469714bc98ee31a6875aea62913ca2f1",
".git/COMMIT_EDITMSG": "bfc083ec9f950b57092a8f0fae3ff6e4",
".git/FETCH_HEAD": "d122973337a3f87790580da3a7022dfd",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm_heavy.js.symbols": "1d7ea6c1d1f7a2ee6af24280f56f702f",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm_heavy.wasm": "9adde1f96ff92bbcbb7a4af917a24556"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
