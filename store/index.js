
export const state = () => ({
    links: {
        main: [
            { name: 'About', link: '#about' },
            { name: 'Testimonials', link: '#testimonials' },
            { name: 'IJMB', link: '/ijmb' },
            { name: 'JUPEB', link: '/jupeb' },
            { name: 'Get in Touch', link: '#get-in-touch' },
            { name: 'Register', link: '#register' },
        ],
        ijmb: [
            { name: 'Home', link: '/' },
            { name: 'About IJMB', link: '/ijmb/about' },
            { name: 'Testimonials', link: '#testimonials' },
            { name: 'Get in Touch', link: '#get-in-touch' },
            { name: 'Register', link: '/ijmb/register' },
        ],
        jupeb: []
    }
})

export const getters = {
    mainLinks: (state) => state.links.main,
    ijmb: (state) => state.links.ijmb,
    jupeb: (state) => state.links.jupeb
}

export const actions = {}

export const mutations = {}
