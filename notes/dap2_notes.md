---
attachments: [Clipboard_2022-07-25-18-30-09.png]
tags: [DAP2 Klausur]
title: Der $O$-Kalkül
created: '2022-07-22T15:32:57.757Z'
modified: '2022-07-27T14:29:44.764Z'
---

## Der $O$-Kalkül

### $O(\ \cdot\ )$
+ $f(n) = O(g(n))$, falls ab $n_0 \in \N$ für $C > 0$ gilt: $$|f(n)| \leq C |g(n)|$$

### $\Omega(\ \cdot\ )$
+ $f(n) = \Omega(g(n))$, falls ab $n_0 \in \N_{>0}$ für $c \in \R_{>0}$ gilt: $$f(n) \geq c \cdot g(n) \geq 0$$

### $\Theta(\ \cdot\ )$
+ $f(n) = \Omega(g(n)) \land g(n) = \Omega(g(n))$

### $o(\ \cdot\ )$
+ $f(n) = O(g(n))$, falls für jede $\varepsilon \in \R_{>0}$ ein $n_0 \in \N$ existiert, sodass gilt: $$|f(n)| \leq \varepsilon |g(n)|$$

## Quicksort

### Einfach
+ Worst case-Laufzeit
  + schlechteste Laufzeit, wenn bereits sortiert
  + WC Laufzeit ist $\sum_{i=1}^n = \frac{n(n+1)}{2}$, da alle Elemente verglichen werden mit dem Pivot
    + Also $\Theta(n^2)$
### Randomisiert
+ Laufzeit für zufällige Permutation $\sigma$: $O(n \log n)$

## Vergleichsbasierte Sortieralgorithmen
+ Benötigen $\Omega(n \log n)$
  + Stirlingformel gibt eine Approximation für $n!$

## Heaps
+ Baum mit 1 bis n
+ jeder Knoten hat höchstens zwei Kinder
+ Kann als array $A = (A_1, \dots , A_n)$ dargestellt werden

### Max-Heaps
+ Für vergleichbare Werte im Knoten
+ Kindknoten haben niemals größere Werte als deren Eltern
  + umgedreht für Min-Heaps
+ `MaxHeapify` hat Laufzeit $O(\log n)$
+ `BuildMaxHeap` hat Laufzeit $O(n)$
+ `Heapsort` hat Laufzeit $O(n \log n)$
  + Deterministischer Sortieralgorithmus
+ Priority Queues erweitern MaxHeap mit `ExtractMax`, `IncreaseKey`, `Insert`
  + Laufzeit $O(\log n)$

## Effiziente Algorithmen
+ die Laufzeit $T_M(e)$ einer Registermaschine $M$ auf eine Eingabe $e \in \Z$ ist die Zahl der ausgeführten Befehle
  + also $T_M(e) \in \N \cup \{\infty\}$
  + die Eingabelänge einer Zahl $e\in\Z$ ist $\lceil \log_2(2+|e|)\rceil$ (anzahl Bits, um $e$ hinzuschreiben)
+ der Algorithmus M ist effizient, wenn es eine Zahl $l > 0$ gibt, so dass $T_M(n) = O(n^l)$

## Countingsort und Radixsort
+ `CountingSort` hat Laufzeit $O(n) + O(k)$
  + Wenn $k = o(n \log n)$, ist CountingSort also schneller als vergleichsbasierte Sortieralgorithmen
+ `CountingSort` ist stabil
+ `RadixSort` hat Laufzeit $O(d \cdot n) + O(d \cdot k)$
  + schon für moderate $d$, $k$ ist dies eine deutliche Verbesserung
+ Verschiedene Schlüsselmengen $S$ können für `RadixSort` möglich

## Mediane und das Auswahlproblem
+ $\texttt{Select}(\textbf A, l)$ hat Laufzeit $O(n)$
  + bestimmt für Liste $\textbf A$ das $l$-te Element
  + Einfacher randommiserter Algorithmus
    + Wie Quicksort aber verfolgt immer nur einen Zweig

## $ggT(a,b)$
+ größter gemeinsamer Teiler
  + Euklid: $a_n = qa_{n+1} + a_{n+2}$
+ Für zwei Zahlen $a,b\in\N$ gibt es Zahlen $u,v\in\Z$, so dass $ggT(a,b) = au + bv$

## Hashing
+ Doppelt verkettete Listen sind langsam ($\Theta(n)$)
+ Direkte Addressierung nimmt zu viel Speicher ($\Theta(k)$) (ok für kleine k)
+ Hasing mit einer Hashingfunktion $$H : S \rightarrow [m] = \{1, \dots, m\}$$
+ Liste mit $m$ einfach verketteten Listen $L = (L_1, \dots, L_m)$
  + Liste $L_i$ spiecher ELemente mit Hash $i$
+ Unter annahme von $O(1)$ für Hashfunktion:
  + `Insert` hat Laufzeit $O(1)$
  + `Search` hat als Laufzeit die Länge der Liste $L_{H(s)}$
  + `Delete` hat als Laufzeit die Länge der Liste $L_{H(s)}$
+ Konstruktion universeller Hashfunktionen
  + $m \in \N_{>1}$
  + $p > m$ ist eine Primzahl
  + für ganze Zahlen $1 \leq a < p$ und $0 \leq b < p$ definiere:
  $$H_{a,b}: \{0,\dots,p-1\} \rightarrow \{0,\dots,m-1\},\hspace{1cm} k \mapsto ((a\cdot k + b) \mod p) \mod m$$
  + $\mathfrak{H}_{p,m} = (H_{a,b})_{a,b}$ ist die Menge aller Hashfunktionen
    + Die Menge $\mathfrak{H}_{p,m}$ ist universell

## Graphen

### Definition
+ Ein Graph $G=(V,E)$ besteht aus
  + einer Menge $V$ von Knoten und
  + einer Menge $E$ von Kanten
    + eine Kante $e \in E$ ist eine zweielementige Teilmenge von $V$
+ vollständig wenn: $\binom{|V|}{2} = |E|$
+ `Nachberschaft` von $v \in V$ sind alle Knoten mit einer direkten Kante zu $v$
  + $\partial_Gv = \{u \in V: uv \in E\}$
+ `Grad` von $v \in V$ ist die Anzahl an Nachbern
  + $d_G(v) = |\partial_Gv|$
+ `adjazent`/`benachbert`: Für die Knoten $v, w \in V$ existiert $vw \in E$
+ `inzident`: Knoten $v$ und Kante $e$ sind inzident, fall $v \in e$
+ `Maximalgrad`: Maximaler Grad im Graphen
  + $\Delta(G)$
+ `Minimalgrad`: Minimaler Grad im Graphen
  + $\delta(G)$
+ `k-regulär`: $\Delta(G) = \delta(G) = k$
+ `Vollständiger Graph`: $K_l$ mit $E(K_l) = \{vw: 1 \leq v < w \leq l\}$
  + Das Komplement $\bar{K_l}$ ist der leere Graph
+ `Kreis`: $C_l$ wird der Kreis auf $l$ Knoten bezeichnet
  + &E(C_l) = {{1,2}, {2,3}, {3,4}, ... , {l,1}}&
+ $\displaystyle \sum_{v\in V(G)} d_G(v) = 2|E(G)|$
  + Die Summe aller Grade ist das doppelte der Anzahl an Kanten
+ `Löschen von Knoten und Kanten`: Für $G=(V,E)$
  + Knoten: Sei $U \subseteq V$ eine Menge von Knoten, definiere $G - U = G[V \backslash U]$
  + Kanten: Sei $F \subseteq E$ eine Menge von Kanten, definiere $G - F = (V, E \backslash F)$

### Zwei Graphen im Vergleich
+ `isomorph`: es existiert eine bijektive Abbildung $\phi : V \rightarrow V'$, so dass
  $$vw \in E \hspace{1cm} \Leftrightarrow \hspace{1cm} \phi(v)\phi(w) \in E' \hspace{1cm} \text{für alle } v,w \in V$$
+ `Untergraph`: $G'$ ist Untergraph von $G$, falls $V' \subseteq V$ und $E' \subseteq E$
+ `Induzierter Untergraph`: $G'$ ist ind. Untergraph, falls $V' \subseteq V$ und $E' = \{vw : w,v \in V', vw \in E\}$
  + Der von $G$ auf $S \subseteq V$ induzierte Untergraph ist der Graph $G[S] = (S, E(G[S]))$
  $$E(G[S]) = \{vw : v,w \in S, vw \in E\}$$
+ `Induzierte Kopie`: Graph $G$ enthält induzierte Kopie eines Graph $G'$, wenn es eine Menge $S \subseteq V$ gibt, so dass $G[S]$ isomorph ist zu $G'$
  + `Kopie`: Graph $G$ enthät Kopie von $G'$, wenn G einen Untergraphen H besitzt, der eine indozierte Kopie von $G'$ enthält.
+ `l-Clique`: In Garph $G$, ist eine $l$-Clique eine Menge $S \subseteq V$ von $|S|=l$ Knoten, so dass $uv \in E$ für alle $u,v \in S, u \neq v$.
  + l-großer Untergraph, welcher mit Kanten $V(G)$ vollständig ist.
    + Kopie von $K_l$ in $G$
+ `Cliquenzahl`: $\omega(G)$
  + maximale Clique
  + $\omega(G) = \max \{|S| : S \text{ ist eine Clique in } G\}$
+ `l-stabile Menge`: In Garph $G$, ist eine $l$-stabile Menge eine Menge $S \subseteq V$ von $|S|=l$ Knoten, so dass $uv \not\in E$ für alle $u,v \in S$. 
  + Kopie von $\bar{K_l}$ in $G$
+ `Stabilitätszahl`: $\alpha(G)$
  + maximale stabile Menge
  + $\alpha(G) = \max \{|S| : S \text{ ist eine stabile Menge in } G\}$
  

### Datenstrukturen
+ `Adjezenzmatrix`
  + Sind Nachbern? Laufzeit $O(1)$
  + Gib alle Nachbern. Laufzeit $O(n)$
  + Speicherbedarf: $\Theta(n^2)$
+ Adjezenzliste
  + Sind Nachbern? Laufzeit $O(min\{ d_G(u), d_G(v)\})$
  + Speicherbedarf: $O(n+m)$

## Bäume, Wälder, Breiten- und Tiefensuche
+ `Zusammenhangskomponente`: $u \sim_G v$
  + es gibt einen Weg zwischen $u$ und $v$
  + Äquivalenzrelation
+ `Zusammenhängend`: Genau eine Zusammenhangskomponente
+ `kreisfrei`: Graph ohne Kreise
+ `Wald`: kreisfreier Graph
+ `Baum`: zusammenhängender Baum
+ `Blatt`: Knoten in Baum mit Grad 1
+ `Spannender Baum`: eines Graphen $G$ ist ein Untergraph $G'=(V,E')$, welcher ein Baum ist
+ `Breitensuche`: $\texttt{BFS}(G, s)$
  + Laufzeit: $O(|V(G)| + |E(G)|)$
```
1:BFS(G, s):
2:  füge s in Queue ein
3:  setze s.abstand = 0
4:  solange Queue nicht leer:
5:    nimm vorderstes Element v raus
6:    für alle Nachbern n von v:
7:      falls n.abstand == 0:
8:        setze n.abstand = v.abstand + 1
9:        füge n in Queue rein
```
+ `Tiefensuche` $\texttt{DFS}(G)$
  + Laufzeit: $O(|V(G)| + |E(G)|)$

## Dijkstra Algorithmus
+ Berechnet kürzeste gewichtete Pfade (nicht negativ)
+ Laufzeit: $O(|V|^2)$
+ $\delta(v)$ ist der gewichtetet Abstand von s (Startknoten) bis v.
+ Programm: (pseudo)
```
1:  PriorityQueue U = {s} // MinHeap
2:  Set S = {}
3:  Solange nicht U.leer():
4:    V u = U.entnehmeMinimum()
5:    S.setzEin(u)
6:    für alle w aus u.nachbern().ohne(S):
7:      U.setzEin(w)
8:      falls w.distanz > u.distanz + u.kante(w).gewicht:
9:        w.distanz = u.distanz + u.kante(w).gewicht
10:       w.vorgänger = u
```

## TSP (Travelling Salesperson[/man])
+ Finde kürzesten Weg, welcher alle Knoten besucht und wieder zum Start zurückkommt
+ Länge einer Tour: &w(sigma) = w({sigma(1), sigma(n)}) + sum_{i=1}^{n-1} w({sigma(i), sigma(i+1)})&
+ kein effizienter Algorithmus für TSP bekannt

## BHK (Bellmann-Held-Karp-Algorithmus)
+ für TSP
+ Laufzeit: $O(2^{n+o(n)})$

## Kruskal
+ gibt minimal spannenden Baum aus
+ Greedy-Algorithmus
  + Probieren immer die günstigste Kante
+ Laufzeit: $O(|E| \log |E|)$
+ Programm:
  + bekomme einen zusammenhängenden Graphen G
  + speicher aufsteigend sortierte Kanten von G in Liste L
  + erstell neuen Graph T mit den Knoten V(G) und keinen Kanten
  + füge jede Kante aus L hinzu, welche verschiedene Komponenten von T verbindet

## Prim-Algorithmus
+ gibt minimal spannenden Baum aus
+ Laufzeit: $O(|E(G)| \log |V(G)|)$

---

## Netzwerkflüsse
+ Notation:
  + &partial^+ v = partial_G^+ v = { w in V : (w,v) in E(G)}&
  + &partial^(-) v = partial_G^(-) v = {w in V : (v,w) in E(G)}&
  + &d_G^+ (v) = |partial_G^+ v|&
  + &d_G^(-) (v) = |partial_G^(-) v|&

### BFS für gerichtete Pfade
+ für Nachbern einfach nur &u in partial^(-) v& verwenden
+ kürzeste gerichtete Pfade in G

### Netzwerk
+ $N = (G, c, s, t)$
  + $G$: gerichteter Graph
  + &c : V times V -> RR_(geq 0)& Kapazitätsfunktion: &c(v,w) = 0 text( falls ) (v,w) notin E(G)&
  + &s in V(G)&: Quelle
  + &s in V(G) \\ {S}&: Senke

### Fluss
+ Ist eine Funktion &f : V times V -> RR&
  + &f(v,w) leq c(v,w)&
  + &f(v,w) + f(w,v) = 0& für alle &v,w in V(G)&
  + &sum_(w in V(G)) f(v,w) = 0& für alle &v in V(G) \\ {s,t}&
+ Der Wert: &|f| = sum_(w in V(G)) f(s,w)&
+ Mit Knotenmengen &A, B subset V&:
  + &f(v,A) = sum_(w in A) f(v,w)&
  + &f(A,v) = sum_(w in A) f(w,v)&
  + &f(A,B) = sum_(w in A)sum_(w in B) f(v,w)&
+ Lemma
  + &f(A,A) = 0&
  + &f(A,B) + f(B,A) = 0&
  + &f(A cup B, C) = f(A,C) + f(B,C)& für &A cap B = emptyset&
  + &f(C, A cup B) = f(C,A) + f(C,B)& für &A cap B = emptyset&
+ Restkapazität: &c_(f)(v,w) = c(v,w) - f(v,w)&
+ Restnetzwerk: &E_f = {(v,w) in V(G) : c_(f)(v,w) > 0}&
+ Lemma
  + Für Fluss $f$ in $N$ und Fluss $g$ in $N_f$:
  $f + g$ ist ein Fluss in $N$ mit Wert $|f + g| = |f| + |g|$
+ Augmentierender Pfad: $s$-$t$-Pfad in $N_f$
  + Kapazität $c_f(p)$ ist $c_f(p) = \min\{c_f(u,v); (u,v) \text{ ist Kante auf } p\} > 0$
+ Fluss $f_p(v,w) = (1\{(v,w) \text{ ist Kante von } p\} - 1\{(w,v) \text{ ist Kante von } p\})c_f(p)$
  + $f_p(v,w)$ ist ein Fluss mit Wert $c_f(p)$ in $N_f$
+ Korollar: Wert von Fluss $(f + f_p)$ ist $|f| + c_f(p) > |f|$

### FordFulkerson
+ Bestimmt den größtmöglichen Fluss
+ Programm:
```
1:  bekomme Netzwerk N
2:  mache leere Flussfunktion
3:  solange es einen augmentierenden Pfaf p in N_f gibt:
4:    f += f_p
5:  gib f aus
```

### EdmondsKarp
+ verwendet FordFulkerson mit Breitensuch, um den augmentierenden Pfad zu finden
+ Laufzeit: $O(|V(G)| \cdot |E(G)|^2)$

### Matchings
+ ist in einem ungerichteten Graphen G eine Menge $M \subseteq E$ von Kanten, so dass
  + $e \cap f = \emptyset$ für alle $e,f \in M, e \neq f$
+ $v(G)$ ist maximale Größe von Matchings ("Matchingzahl von G")
+ G heißt bipartit, falls $\chi(G) = 2$
+ eine Bipartition von G ist ein Paar $(S,T)$ von stabilen Mengen, so dass $S \cup T = V(G)$ und $S \cap T = \emptyset$
+ Satz von Hall: Mit bipartiten Graph G (Bipartition $(S,T)$) gilt, $v(G) = |S|$ genau dann wenn
$|\partial U| \geq |U|$ für alle $U \subseteq S$

### Matchings via Flüsse
+ Netzwerk N aus Graph G errichten:
  + $V(\Gamma) = V(G) \cup \{s,t\}$ mit $s,t \not \in V(G)$
  + $E(\Gamma) = \{(v,w) \in S \times T: vw \in E(G)\} \cup \{s\} \times S \cup T \times \{t\}$
+ FordFulkerson anwenden
+ Da alle Kapazitäten {0, 1} sind, ist der optimale Fluss auch {0, 1}-wertig
  + es gibt effizientere Algorithmen

### max flow min cut
+ Für jedes netzwerk gilt
&&max{|f| : f text( ist ein Fluss in )N} = min{c(S) : S text( ist ein Schnitt in )N}&&

## Red Black Trees
+ Tiefe: $O(\log n)$
+ Self balancing binary search tree
+ Laufzeit zum entfernen eines Knotens: $O(\log n)$
+ Laufzeit zum einfügen eines Knotens: $O(\log n)$
+ Beispielanwendung: Prozessorscheduling im Linux-Kernel
