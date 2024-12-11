# Poisson-lanterne

Chaque nombre représente un Poisson-lanterne (un petit poisson qui brille dans la nuit).

La valeur du nombre représente le nombre de jours qu'il reste avant qu'il ait un enfant (et donc crée un nouveau poisson-lanterne).

Ce nouveau poisson commencera sa vie avec la valeur de 8 jours avant d'avoir un bébé.

Prenons par exemple un poisson-lanterne qui a la valeur 3 :

    Au début, il a un timer avant de faire un enfant de 3
    Au bout du premier jour, le timer passe à 2
    Au bout du deuxième jour, le timer passe à 1
    Au bout du troisième jour, le timer passe à 0
    Au bout du quatrième jour, le timer passe à 6 et il fait un enfant qui a un timer de 8
    Le cinquième jour, le timer du parent passera à 5 et le timer de l'enfant à 7
    Ainsi de suite...
