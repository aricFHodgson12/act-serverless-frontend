import colors from 'vuetify/es5/util/colors';

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s',
        title: 'Call Tracking',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        {
            src: '@/assets/stylesheets/index.scss',
            lang: 'scss'
        }
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/api',
        '@/plugins/highchart.js',
        '@/plugins/map.js',
        '@/plugins/lodash.js',
        '@/plugins/vuelidate',
        '@/plugins/resizable.js',
        '@/plugins/draggable.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        [
            'nuxt-i18n',
            {
                locales: ['en', 'es'],
                defaultLocale: 'en',
                vueI18n: {
                    fallbackLocale: 'en',
                    messages: {
                        en: {
                            uploader: {
                                desc: 'Upload image in PNG or JPEG format'
                            },
                            login: {
                                title: 'Call Tracking Login',
                                subdomain_required: 'Sub Domain is required.',
                                email_required: 'E-mail is required.',
                                email_invalid: 'Must be valid e-mail.',
                                password_required: 'Password is required.',
                                password_invalid:
                                    'Password must be at least 8 characters long.',
                                submit: 'Login',
                                forgotpassword: 'Forgot password?',
                                remember_me: 'Remember Me'
                            },
                            forgotpassword: {
                                title: 'Forgot Password',
                                login: 'Login',
                                submit: 'Reset my password',
                                success: 'Check your E-mail to reset password'
                            },
                            resetpassword: {
                                success:
                                    'You changed your password successfully'
                            },
                            register: {
                                title: 'Call Tracking Register',
                                submit: 'Register',
                                first_name: 'First Name',
                                first_name_required: 'First Name is required',
                                last_name_required: 'Last Name is required',
                                last_name: 'Last Name',
                                phone_number: 'Phone Number',
                                confirm_password: 'Confirm Password',
                                password_no_match:
                                    'Passwords must be identical',
                                success:
                                    'We have sent you a confirmation E-mail',
                                company_name: 'Company Name',
                                company_name_required:
                                    'Company Name is required'
                            },
                            calls: {
                                title: 'Call Dashboard',
                                timeline: {
                                    title: 'Calls Timeline'
                                },
                                sms: {
                                    title: 'SMS Inbox'
                                },
                                details: {
                                    title: 'Call Details',
                                    back: 'Back to Calls Dashboard',
                                    incoming: {
                                        title: 'Incoming Call Answered',
                                        date: 'Date & Time',
                                        tracking: 'Tracking Number',
                                        agent: 'Agent',
                                        duration: 'Duration'
                                    },
                                    recording: {
                                        title: 'Call Recording'
                                    },
                                    tags: {
                                        title: 'Tags',
                                        subTitle: 'Manage Tags'
                                    },
                                    notes: {
                                        title: 'Notes'
                                    },
                                    caller: {
                                        title: 'Caller'
                                    }
                                }
                            },
                            setting: {
                                title: 'ACT Settings',
                                header_btn: 'Changelog & Updates',
                                basic: {
                                    title: 'Name & Logo',
                                    subtitle:
                                        'Users will see name and logo on ACT login page, site header and invoices.',
                                    name_label: 'Company Name',
                                    logo_label: 'Header Logo',
                                    preview_label: 'Preview',
                                    show_name_label: 'Show company name in header',
                                    default_label: 'Use Default',
                                    custom_label: 'Upload custom logo',
                                    no_logo_label: 'Do not use logo',
                                    upload_logo_label:
                                        'Logo for Login Page & Invoices',
                                    upload_button_name: 'Upload Logo',
                                    submit_label: 'Save',
                                    cancel_label: 'Cancel',
                                    confirm_clicked:
                                        'Hi Dear, You clicked button. Thanks.'
                                },
                                preferences: {
                                    title: 'Preferences',
                                    default_title: 'Defaults',
                                    mask_label: 'Mask recordings URLs',
                                    recording_label:
                                        'Disable call recording for ALL companies',
                                    cname_label:
                                        'Use OpenCNAME for Caller ID Lookup',
                                    ringtone_label: 'Ringtone',
                                    select_ringtone_label: 'Select Ringtone'
                                }
                            },
                            auto_dialer: {
                                title: 'Auto Dialer'
                            },
                            email: 'E-mail',
                            password: 'Password',
                            sub_domains: 'Sub Domains',
                            title: 'Analytic Call Tracking'
                        },
                        es: {}
                    }
                }
            }
        ]
    ],
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                light: {
                    blue: '#0095ff',
                    primary: '#4d5f7a',
                    light_primary: '#43546E',
                    bold: '#3a4a63',
                    light: '#e1e5eb',
                    text: '#93a2b9',
                    background: '#fafbfc',
                    button: '#637591',
                    links: '#0095ff',
                    success: '#15bf81',
                    warning: '#ffba5a',
                    error: '#ff6666',
                    grey_shades_1: '#fafbfc',
                    grey_shades_2: '#edf0f5',
                    grey_shades_3: '#e1e5eb',
                    grey_shades_4: '#ced2db',
                    grey_shades_5: '#acb4c2',
                    grey_shades_6: '#848ea1',
                    graphs_1: '#d28cbd',
                    graphs_2: '#ffba5a',
                    graphs_3: '#78d8de',
                    graphs_4: '#a78375',
                    graphs_5: '#b9d581',
                    graphs_6: '#898ddd',
                    graphs_7: '#f3e67b',
                    graphs_8: '#537ca6',
                    graphs_9: '#50bff2',
                    graphs_10: '#ff6666',
                    graphs_11: '#15bf81'
                }
            }
        }
    },
    env: {
        API_URL: process.env.API_URL,
        MEDIA_URL: process.env.MEDIA_URL
    },

    server: {
        port: process.env.VUE_APP_PORT
    }
};
