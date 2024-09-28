/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.pravatar.cc', 'app.blaze.ninja', 'img.freepik.com', 'avatar.iran.liara.run'], // Cada domínio deve ser uma string separada
  },
};

export default nextConfig;
