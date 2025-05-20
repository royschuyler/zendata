module.exports = [
    {
        slug: 'full-stack-web-development',
        name: 'Full Stack Web Development',
        tagline: 'Custom apps & robust platforms built for the future.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
        `,
        description: 'End-to-end solutions using modern JavaScript frameworks, scalable backends, and cloud infrastructure. We design, build, and maintain robust web apps tailored to your needs.',
        points: [
            'Custom web app architecture',
            'API design and integration',
            'Responsive UI/UX',
            'Maintenance & scaling'
        ]
    },
    {
        slug: 'e-commerce-development',
        name: 'E-commerce Development',
        tagline: 'Sell more with scalable, secure online stores.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l1.68 9.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61l1.38-7.39H5.21"/>
        </svg>
        `,
        description: 'Build scalable, secure, and user-friendly online stores that help you sell more and streamline operations. Our platforms are tailored to your business model.',
        points: [
            'Custom shopping carts',
            'Payment gateway integration',
            'Inventory & order management',
            'Performance optimization',
            'Automated sales reporting'
        ]
    },
    {
        slug: 'mirth-connect-integration',
        name: 'Mirth Connect Integration',
        tagline: 'Expert HL7 and healthcare data integration with Mirth Connect.',
        icon: `<img src="/images/mirth-logo.png" alt="Mirth Connect logo" class="service-mirth-logo" />`,
        description: 'Expert HL7 and healthcare data integration with Mirth Connect.',
        points: [ /* ... */ ], // keep these if you want them on the Services grid
        detailHtml: `
            <img src="/images/mirth-logo.png" alt="Mirth Connect logo" class="service-mirth-logo" />
            <h1>Mirth Connect Integration & HL7 Interface Development</h1>
            <div class="service-tagline">
                Expert healthcare data integration, channel development, and support with Mirth Connect.
            </div>
            <div class="service-description">
                <p>
                    Are you looking for an experienced <strong>Mirth Connect developer</strong> to help with HL7 interfaces, FHIR integration, or healthcare data exchange? Zen Data has deep experience in <strong>Mirth Connect channel development, deployment, and troubleshooting</strong> for hospitals, clinics, labs, and healthcare IT vendors across Nashville and beyond. Whether you need to build new interfaces, migrate data, or optimize your existing Mirth deployment, we can help.
                </p>
                <p>
                    We understand the unique challenges of <strong>healthcare integration</strong>: from HIPAA compliance to reliable HL7, FHIR, CCD, and custom format messaging. Our Nashville-based team provides responsive, expert consulting and hands-on implementation—local or remote—to keep your clinical data flowing smoothly.
                </p>
            </div>
            <div class="service-features">
                <h3>Our Mirth Connect Services:</h3>
                <ul>
                    <li><span class="service-feature-dot"></span>Mirth Connect channel development, deployment & support</li>
                    <li><span class="service-feature-dot"></span>HL7, FHIR, CCD, X12, and custom interface design</li>
                    <li><span class="service-feature-dot"></span>Integration with EHR, LIS, RIS, and other healthcare systems</li>
                    <li><span class="service-feature-dot"></span>Healthcare data mapping, transformation, and routing</li>
                    <li><span class="service-feature-dot"></span>Performance optimization and troubleshooting</li>
                    <li><span class="service-feature-dot"></span>Remote or onsite consulting—serving Nashville and nationwide</li>
                </ul>
            </div>
            <div class="service-cta">
                <a href="/contact" class="cta-button">Request a Mirth Consultation</a>
                <a href="/services" class="cta-link">Back to all services</a>
            </div>
        `
    },
    {
        slug: 'seo',
        name: 'SEO',
        tagline: 'Be found first. Grow organic traffic & leads.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="18" y1="20" x2="18" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
        `,
        description: 'Get found online! We optimize your website for search engines, increasing organic traffic and delivering measurable results.',
        points: [
            'Keyword research & strategy',
            'On-page optimization',
            'Technical SEO audits',
            'Ongoing analytics & reporting'
        ]
    },
    {
        slug: 'reporting-automation',
        name: 'Reporting & Automation',
        tagline: 'Automate workflows & visualize your business data.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
        </svg>
        `,
        description: 'Save time and gain insight with automated business processes and custom dashboards tailored to your unique KPIs.',
        points: [
            'Automated workflow setup',
            'Custom reporting dashboards',
            'Data visualization',
            'Integration with third-party tools'
        ]
    },
    {
        slug: 'ai-business-intelligence',
        name: 'AI Business Intelligence',
        tagline: 'Unlock actionable insights with smart BI bots.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M10 20.5V4.5A2.5 2.5 0 0 1 12.5 2H14A7 7 0 0 1 21 9v3a7 7 0 0 1-7 7h-1.5A2.5 2.5 0 0 1 10 20.5z"/>
            <circle cx="7.5" cy="8.5" r="1"/>
            <circle cx="16.5" cy="15.5" r="1"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>
        `,
        description: 'Unleash the power of AI to automate analysis and discover actionable insights using our business intelligence bots.',
        points: [
            'Automated data analysis',
            'Smart bots for reporting',
            'Predictive insights',
            'Custom AI solutions'
        ]
    },
    {
        slug: 'data-integration',
        name: 'Data Integration',
        tagline: 'Seamless, compliant data flows—healthcare & beyond.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
            <path d="M3 12a9 3 0 0 0 18 0"/>
        </svg>
        `,
        description: 'Connect, clean, and synchronize your data across platforms—specializing in healthcare compliance and cross-industry solutions.',
        points: [
            'Healthcare data compliance',
            'API & database integration',
            'ETL pipelines',
            'Cross-platform data syncing'
        ]
    },
    {
        slug: 'custom-software-development',
        name: 'Custom Software Development',
        tagline: 'Technology built for your unique needs—web, desktop, mobile, or more.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M9 9h6v6H9z"/>
        </svg>
        `,
        description: 'We design, build, and support custom software systems tailored specifically for your business. Whether it’s a web application, desktop program, mobile app, backend API, or automation, we deliver solutions that fit your workflow and drive real value.',
        points: [
            'Bespoke web, desktop, and mobile applications',
            'API and system integrations',
            'Process automation and workflow tools',
            'User experience design tailored to your audience',
            'Long-term support and evolution'
        ]
    },
    {
        slug: 'project-management',
        name: 'Project Management',
        tagline: 'Expert leadership from start to finish.',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="9" y="2" width="6" height="4" rx="1"/>
            <path d="M9 4h6"/>
            <rect x="4" y="6" width="16" height="16" rx="2"/>
            <path d="M9 14l2 2 4-4"/>
        </svg>
        `,
        description: 'Technical leadership and end-to-end project management services to keep your projects on track, on time, and on budget.',
        points: [
            'Agile methodology',
            'Clear communication',
            'Risk management',
            'Delivery & support'
        ]
    }
];
