// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.pravatar.cc', 'app.blaze.ninja', 'img.freepik.com', 'avatar.iran.liara.run'], // Cada domínio deve ser uma string separada
  },
  async headers() {
    return [
      {
        source: '/(.*).(js|css|png|jpg|jpeg|gif|svg|webp|ico|ttf|woff|woff2|eot|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
