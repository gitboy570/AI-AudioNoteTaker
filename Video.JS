function shareViaEmailAddress(transcription) {
    const emailAddress = 'Sharing my Audio Notes';
    const body = encodeURI(transcription); // Encode to hanlde special characters
    window.open('mailto:?subject=${subject}&body=${body}');
}

async function shareToGoogleDocs(transcription) {
    const document = {
        title: 'My Audio Notes',
        body: {
            content: [
                {
                    paragraph: {
                        elements: [
                            {
                                textRun: {
                                    content: transcription,
                            }
                    }
                }
            ]
        }    
    }

    const response = await fetch('http://docs.googleapis.com/v1/documents', {
       method: 'POST',
       headers: {
        'Authorization': 'Bearer ${access_token}',
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(document)
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Document created:', data);
        // Optionally provide feedback to the user
    } else {
        console.error('Error creating document:', response.statusText);
        // Optionally handle error cases for user feedback
    }
