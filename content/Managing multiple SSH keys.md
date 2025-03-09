1. Generate a new SSH key
```bash
ssh-keygen -t ed25519 -C "info@museful.de" -f ~/.ssh/id_ed25519_museful
```

1. Add the SSH Key to the SSH Agent
```bash
eval "$(ssh-agent -s)"
```