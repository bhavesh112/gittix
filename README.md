# gittix
An application made using microservices architecture to buy and sell tickets.


## Run Locally

__Prerequisites__

- Install Docker Desktop and enable kubernetes.
- Install  `ingress-nginx` using :
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
```
- Install [skaffold](https://skaffold.dev/docs/install/).

Clone the project

```bash
  git clone https://github.com/bhavesh112/gittix
```

Go to the project directory

```bash
  cd gittix
``` 

Create JWT secret

```bash
 kubectl secret generic jwt-secret --from-literal=JWT_KEY=secret
```

Tweak the `hosts` file

- Windows  
    >C:\Windows\System32\Drivers\etc\host
- Mac 
    >/etc/hosts    
- Open the respective file
- Add `127.0.0.1 ticketing.dev`in the file
- This will allow ticketing.dev to act as `localhost`

Command to run locally

```bash
 skaffold dev
```

The application can be accessed by opening `ticketing.dev` in the browser




