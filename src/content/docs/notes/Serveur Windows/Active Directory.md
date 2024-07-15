---
title: Active Directory
editUrl: false
sidebar:
  order: 1
  badge:
    text: nouveau
    variant: tip
description: Documentation sur Active Directory
tags:
  - TSSR
---

:::caution[Attention]
Ce qui suit sont des questions de cours, qui seront demandées à l'examen
:::

Un serveur qui n'est pas dans un domaine est un **serveur autonome**.

|                    Serveurs                    | Autre serveurs (Acronymes) |
| :--------------------------------------------: | :------------------------: |
|               Serveur de fichier               |            DHCP            |
|                   Serveur web                  |           AD/ DC           |
| Serveur d'application (serveur métier, SAP...) |             DNS            |
|              BDD (base de donnée)              |             FTP            |
|              Serveur d'impression              |                            |
|              Serveur de sauvegarde             |                            |
|             Serveur de déploiement             |             WDS            |
|             Serveur de mise à jour             |            WSUS            |

SAP est un ERP (**E**nterprise **R**essource **P**lanning) / PGI (**P**rogiciel de **G**estion **I**ntégrée) = Système d'information globale. Comptabilité (devis, factures...), gestion des stocks, RH (fiche de paie, congés, promesses d'embauche...). ex : CEGID, SAGE, SAP...

BDD (**B**ases **d**e **d**onnées) :

Oracle, SQL, SYBABE

Plus petits : Postgres, mysql/MariaDB, mongo DB

Quel est le serveur de messagerie de Microsoft ? **Exchange**. Outlook est le client, **pas** le serveur.

Quel est le serveur web de Microsoft ? IIS (**I**nternet **I**nformation **S**erveur)

Apache / Nginx pour Linux.

***

Lorsque l'on ajoute le rôle ADDS à un serveur autonome, il devient un DC (Domain Controller), contrôleur de domaine (on a crée la forêt, le domaine...). On a créé une base de donnée, l'Active Directory. Le répertoire qui contient l'AD s'appelle NTDS.

`%systemroot%` = répertoire windows.

L'AD = OU, groupes, users, sites, les ordinateurs, les imprimantes, les stratégies (GPO).

GPO, scripts = répertoire `sysvol`.

Contrôleur de domaine : Authentifie les utilisateurs et les ordinateurs du domaine.

Pourquoi avoir deux AD :

1. Tolérance de panne : Haute disponibilité, Continuité des services
2. Répartition de la charge

Un serveur qui appartient à l'AD est un serveur membre (contrairement à un serveur autonome).

Un serveur de fichier : Un serveur dans lequel on va partager une ressources. Dès lors que l'on partage un dossier dans un serveur, il devient un serveur de fichier.

Nombre de connexion simultanées :

|  XP |  W7 | Serveur windows |
| :-: | :-: | --------------- |
|  10 |  20 | 2^24            |

***

Méthode AGDLP :

* **A**ccount
* **G**roup (global)
* groupe **D**omaine **L**ocal
* affecter **P**ermissions

UPL = première lettre du prénom et nom.

A quoi sers une OU ? Appliquer les GPO\
A quoi sers un groupe ? Appiquer les ACL (Access Control List)
