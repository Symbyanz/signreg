/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        })
        config.plugins.push({
            apply: (compiler) => {
                compiler.hooks.done.tap('DonePlugin', (stats) => {
                    console.log('Compile is done !' + typeof process.env.NEXT_PUBLIC_BG_START);
                    if(+process.env.NEXT_PUBLIC_BG_START){
                        setTimeout(() => {
                            process.exit(0);
                        });
                    }
                });
            }
        })
        return config
    }
}

module.exports = nextConfig
