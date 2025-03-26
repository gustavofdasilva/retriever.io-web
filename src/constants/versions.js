import githubUrls from "./githubUrls"

const versions = [
    {
        version: '1.0',
        date: '2025-03-20',
        status: 'Latest',
        releaseNotes: `First release! 🎉`,
        downloadVersions: {
            windows: {
                versions: [
                    {
                        label: 'Setup',
                        link: githubUrls.windows.setup
                    },
                    {
                        label: 'Portable',
                        link: githubUrls.windows.portable
                    }
                ],
            },
            linux: {
                versions: [
                    {
                        label: '.deb',
                        link: githubUrls.linux.deb
                    },
                    {
                        label: '.rpm',
                        link: githubUrls.linux.rpm
                    },
                    {
                        label: '.appimage',
                        link: githubUrls.linux.appImage
                    }
                ],
            },
            // macos: {
            //     versions: [
            //         {
            //             label: 'Setup',
            //             link: ''
            //         },
            //         {
            //             label: 'Portable',
            //             link: ''
            //         },
            //     ],
            // }
        }
    },
]

export default versions