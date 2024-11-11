function shareViaEmail(transcription) {
    const subject = 'Sharing my Audio Notes';
    const body = encodeURIComponent(transcription); // Encode to handle special characters
    window.open('mailto:?subject=${subject}&body=${body});
}

async function shareToGoogleDocs(transcription) {
    const accessToken = /* get OAuth access token */
    const documment = {
        title: 'My Audio Notes',
        body: {
            content: [
                {
                    paragraph: {
                        element: [
                            textRun: {
                                content: transcription
                            }
                        ]
                    }
                }
            ]
        }
    }
    const response = await fetch('https://docs.google.com/document/batch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({requests: [{create: documment}]})
    });

    if (!response.ok) {
        const data = await response.json();
        console.log('Document created:', data);
        } else {
            console.error('Error creating document:', response.statusText)
        }
}

return (
    <div>
        <button onClick={() => shareViaEmail(transcription)}>Share via Email</button>
        <button onClick={() => shareToGoogleDocs(transcription)}>Share to Google Docs</button>
    </div>
 );
