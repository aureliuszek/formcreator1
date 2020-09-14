# Aplikacja FormCreator - etap 1

Budujemy aplikację służącą do tworzenia internetowych ankiet – formularzy. Na pierwszym spotkaniu programujemy podstawową funkcjonalność aplikacji - wyświetlenie przykładowej ankiety.

## Zadania:

1. Napisz enumerator FieldType który będzie definiował typy pól możliwych do użycia w ankiecie (pole tekstowe, pole wielolinijkowe, data, e-mail, pole wyboru, checkbox)

2. Napisz interfejs Field który będzie definiował podstawowe właściwości i metody pojedynczego pola ankiety. Każde pole powinno zawierać: nazwę, etykietę, typ pola, wartość. Każde pole powinno także móc wyświetlić swoją zawartość we wskazanym miejscu za pomocą metody render(). Wyświetlone pole powinno składać się z etykiety i pola formularza.

3. Do wyświetlenia etykiety napisz klasę FieldLabel.

4. Utwórz sześć podstawowe klasy InputField, TextAreaField, DateField, EmailField, SelectField, CheckboxField odpowiadające za wyświetlanie pól (typ pola zgodny z nazwą). Klasy powinny implementować Field

5. Utwórz klasę Form. Klasa form odpowiada za przetrzymywanie całości informacji o formularzu oraz jego wyświetlanie. W klasie powinny być przechowywane informacje o wszystkich polach formularza (tablica elementów Field). Klasa powinna udostępniać dwie metody: getValue() pobierającą wyniki formularza oraz render() wyświetlającą formularz we wskazanym miejscu.

6. Utwórz klasę App. Klasa App to klasa zarządzająca z wszystkimi podstawowymi funkcjami aplikacji – reagowaniem na elementy interfejsu, wyświetlaniem formularzy itd.

Efektem pracy powinna być aplikacja która pozwala wyświetlić statycznie zakodowany formularz. Powinna też umożliwić pobranie wyników ankiety (wartości formularza) i wyświetlenie ich w dowolnym miejscu ekranu (jedynie dla testu metody getValue() klasy Form).

Przykładowy formularz do wyświetlenia:

1. Imię (pole tekstowe)

2. Nazwisko (pole tekstowe)

3. E-mail (pole e-mail)

4. Wybrany kierunek studiów (select)

5. Czy preferujesz e-learning (checkbox)

6. Uwagi (textarea)

# Aplikacja FormCreator - etap 2

Nomenklatura:

Dokument - formularz wypełniony przez użytkownika aplikacji.

## Zadania:

1. Napisz interfejs Storage. Będzie stanowił definicję dla klas odpowiadających za zapis i odczyt danych. Interfejs powinien definiować metody:

* saveDocument() - metoda powinna pobierać jako parametr obiekt z wartościami pól formularza (typ any) i zwracać identyfikator dokumentu (string)

* loadDocument() - metoda powinna pobierać jako parametr identyfikator dokumentu i zwracać obiekt z wartościami dokumentu (czyli wartościami wypełnionych przez użytkownika pól formularza)

* getDocuments() - metoda powinna zwracać tablicę idenfikatorów wszystkich zapisanych dokumentów.

2. Napisz klasę LocStorage implementującą interfejs Storage. Klasa LocStorage powinna wykorzystywać obiekt localStorage do przechowywania danych.

Wskazówki:

* zapisuj dokumenty używając klucza dokumentu jako klucza elementu w localStorage

* metoda saveDocument() powinna wygenerować unikalny identyfikator dokumentu. Użyj Date.now() do pobrania daty (timestamp) zapisania dokumentu. Idenfytikator twórz w oparciu o szablon "document-timestamp".

* zapamiętaj wszystkie dokumenty (id dokumentu) w osobnym elemencie w localStorage (tablica).

* pamiętaj, że w localStorage zapisujemy stringi. Aby zapisać obiekt z wartościami formularza użyj obiektu JSON do serializacji danych.

3. Napisz nową klasę DocumentList. Klasa powinna zawierać właściwość przetrzymującą listę wszystkich dokumentów oraz metody:

* getDocumentList() - metoda powinna korzystać z klasy LocStorage do pobrania listy dokumentów i zapamiętania jej w wewn. właściwości klasy

* render() - metoda powinna wyświetlać listę dokumentów w formie tabeli zawierającej id dokumentu.

4. Rozbuduj interface Field i klasy dziedziczące po tym interfejsie o metodę getValue(). Metoda ta powinna zwracać aktualną wartość pola. Czyli np. dla InputField getValue() powinno zwracać aktualną wartość `<input>`, dla TextAreaField aktualną wartość `<textarea>` itd.

5. Rozbuduj metodę render() klasy Form o renderowanie przycisku zapisu formularza oraz przycisku wyjścia ("Wstecz").

Kliknięcie w przycisk "Zapisz" powinno uruchamiać metodę save() klasy Form. Metoda save() powinna zapisać dokument wykorzystując do tego celu klasę LocStorage i następnie przekierować użytkownika na stronę /index.html

Kliknięcie w "Wstecz" powinno przekierować użytkownika na stronę /index.html. Do przekierowania możesz użyć właściwości window.location.href

6. Utwórz nowy plik new-document.html. Użytkownik trafiający na stronę /new-document.html powinien widzieć nowy, pusty dokument do wypełnienia (czyli widok z poprzedniego etapu projektu).
7. Utwórz nowy plik document-list.html. Strona powinna korzystać z klasy DocumentList do wyświetlenia listy zapisanych dokumentów.
8. Zmodyfikuj plik index.html - strona startowa aplikacji powinna wyświetlać jedynie menu z linkiem do nowego formularza i listy dokumentów.

# Aplikacja FormCreator - etap 3

## Zadania:

1. Rozbuduj klasę DocumentList. 

   - Metoda render powinna renderować listę dokumentów z linkami do edycji wybranych dokumentów. Link powinien kierować do strony edit-document.html?id=id_dokumentu (w parametrze GET id przekazujemy id dokumentu). 
     Dodatkowo w każdym wierszu powinien znaleźć się przycisk usuń uruchamiający metodę removeDocument(id) klasy DocumentList. 
   - Dodaj nową metodę getDocument(id) zwracającą dokument o wskazanym id 
   - Dodaj nową metodę removeDocument(id) usuwającą wskazany dokument 

2. Stwórz nową klasę Router. Klasa będzie się zajmować obsługą adresów url oraz przekazywanych parametrów 

   - Dodaj statyczną metodę getParam(key: string). Metoda powinna zwracać wartość parametru GET o wskazanym kluczu. Wykorzystaj kod: 

     ```js
     const query: string = window.location.search.substr(1);
     const urlParams = new URLSearchParams(query);
     const id = urlParams.get('id'); 
     ```

3. Stwórz nową podstronę edit-document.html. 
   - wykorzystując Router.getParam() pobierz id dokumentu 
   - pobierz i wyświetl dokument do edycji z użyciem getDocument() z DocumentList 
   - po edycji zapisz dokument 
4. Stwórz klasę FormCreator. 
   - Dodaj metodę newForm(). Wykorzystując materiały z pierwszych zajęć wyświetl prosty kreator formularzy (każde pole formularza składa się z typu pola, nazwy, etykiety oraz domyślnej wartości). 
   - Dodaj metodę saveForm(). Metoda powinna wykorzystywać klasę LocStorage do zapisania formularza. 
5. Rozbuduj klasę LocStorage o metodę removeDocument(id) umożliwiającą usunięcie wskazanego dokumentu. 
6. Rozbuduj klasę LocStorage o metody umożliwiające zapisu i odczyt zapisanych formularzy (analogicznie do dokumentów). 

# Aplikacja FormCreator - etap 4 

## Zadania:  

1. Zmodyfikuj klasę Form, dodaj nową własciwość formularza – ID. 

2. Zmodyfikuj adres /new-document.html tak by w parametrze GET przyjmował ID formularza który zostanie wyświetlony użytkownikowi 

3. Rozbuduj klasę FormCreator o metodę renderującą tabelę z listą formularzy. Każda pozycja listy powinna zawierać nazwę formularza i link do wypełnienia tego formularza. 

4. Dodaj podstronę /form-list.html wyświetlającą listę dostępnych formularzy. 