---
title: Firewall Cisco ASA
editUrl: false
---

La configuration d'un pare-feu Cisco dépend du modèle spécifique du pare-feu et de la version de son système d'exploitation, Cisco ASA ou Cisco IOS. Voici quelques commandes générales pour configurer un pare-feu Cisco ASA, l'un des équipements de pare-feu les plus couramment utilisés de Cisco :

1. **Accéder au mode de configuration** :

   ```bash
   enable
   configure terminal
   ```

2. **Configurer les interfaces** :

   ```bash
   interface ethernet0/0
   ip address [adresse_ip] [masque_de_sous_reseau]
   nameif [nom_interface]
   security-level [niveau_de_securite]
   ```

3. **Autoriser le trafic entrant** :

   ```bash
   access-list [nom_liste] extended permit [protocole] [source] [destination] [port]
   access-group [nom_liste] in interface [interface]
   ```

4. **NAT (Network Address Translation)** :

   ```bash
   object network obj_any
   subnet 0.0.0.0 0.0.0.0
   nat (inside,outside) dynamic interface
   ```

5. **Définir les règles de translation d'adresses** :

   ```bash
   nat (inside,outside) source dynamic [source_interne] [adresse_publique]
   ```

6. **Activer le routage** :

   ```bash
   route [interface] [adresse_reseau] [masque_de_sous_reseau] [passerelle]
   ```

7. **Configuration de la sécurité** :

   ```bash
   threat-detection basic-threat
   threat-detection scanning-threat
   ```

8. **Configurer les règles de filtrage des adresses IP** :

   ```bash
   access-list [nom_liste] extended deny ip [source] [destination]
   access-list [nom_liste] extended permit ip any any
   ```

9. **Configurer le mode inspection pour les protocoles** :

   ```bash
   policy-map global_policy
   class inspection_default
   inspect [protocole]
   ```

10. **Appliquer la politique globale** :

    ```bash
    ```

service-policy global\_policy global

```

Ces commandes fournissent une base pour configurer un pare-feu Cisco ASA. Assurez-vous de consulter la documentation spécifique à votre modèle et à votre version du système d'exploitation Cisco pour obtenir des instructions détaillées sur la configuration de votre pare-feu. De plus, n'oubliez pas de tester et de valider votre configuration pour vous assurer qu'elle fonctionne comme prévu.
```
