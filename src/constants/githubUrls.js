const baseUrl = 'https://github.com/gustavofdasilva/retriever.io/releases/download/v1.0.0';

const githubUrls = {
    windows: {
        setup: `${baseUrl}/retriever-io_1.0.0_x64-setup.exe`,
        portable: `${baseUrl}//retriever-io.exe`,
    },
    linux: {
        deb: `${baseUrl}/retriever-io-deb.zip`,
        rpm: `${baseUrl}/retriever-io-rpm.zip`,
        appImage: `${baseUrl}/retriever-io-appimage.zip`,
    }
}

export default githubUrls;