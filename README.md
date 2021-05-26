# smpl trkr

A simple JS-free tracker to help track views anywhere you can add an `<img>` tag. (Works on Github, or your blog)

## 📋 Approach

This is just a proof of concept project I wanted to write to understand how web tracking works. 

- An `img` tag sends a GET request to a server
- The server extracts information (like hostname, ip address, user agent etc) from the request
- Users of the API are then able to see their results in aggregate

The extracted data is then used to create a payload object that is validated against a [JSON schema](https://json-schema.org/) object before being processed.

The main idea here is that the server resolves a request with a `204 No Content` status code to the client, while recording the request in the background.

## 👷‍♂️ Architecture

In order for the server to be resilient to high load, every request creates an event (once validated) which can then be added to a queue to be processed. This architecture ensures that the server is available even under high load, and we're able to process the events at a constant speed to ensure we do not lose any data due to a high number of requests.
