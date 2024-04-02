const scriptTags = document.querySelectorAll('script');
        scriptTags.forEach((script) => {
            const scriptContent = script.textContent;
            if (scriptContent.trim().startsWith('require.config.params["args"]')) {
                let str = scriptContent;
                let index = str.indexOf('=');


                let result = str.substring(index + 1).trim();
                if (result.endsWith(';')) {
                  
                    result = result.slice(0, -1);
                  }
                  result = result.replace('matchId', '"matchId"');
                result = result.replace('matchCentreData', '"matchCentreData"');
                result = result.replace('matchCentreEventTypeJson', '"matchCentreEventTypeJson"');
                result = result.replace('formationIdNameMappings', '"formationIdNameMappings"');
                console.log(result);
            }
        });