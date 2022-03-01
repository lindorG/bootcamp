package com.lindor;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // #1
        int a = 1;
        a = 7;
        if (a < 10) {
            System.out.println("Less than 10");
        }
        a = 15;
        if (a < 10) {
            System.out.println("Less than 10 after re-assignment");
        }

        // #2
        int b = 1;
        b = 15;
        if (b < 10) {
            System.out.println("Less than 10");
        } else {
            System.out.println("Greater than 10");
        }

        // #3
        int c = 1;
        c = 15;
        if (c < 10) {
            System.out.println("Less than 10");
        } else if (c > 10 && c < 20) {
            System.out.println("Between 10 and 20");
        }

        // #4
        int d = 1;
        d = 15;
        if (d < 10 || d > 20) {
            System.out.println("Out of range");
        } else if (d > 10 && d < 20) {
            System.out.println("In range");
        }

        // #5
        Scanner scan = new Scanner(System.in);
        System.out.print("Score: ");
        int e = scan.nextInt();
        if (e >= 90 && e <= 100) {
            System.out.println("A");
        } else if (e >= 80 && e < 90) {
            System.out.println("B");
        } else if (e >= 70 && e < 80) {
            System.out.println("C");
        } else if (e >= 60 && e < 70) {
            System.out.println("D");
        } else if (e >= 0 && e < 60) {
            System.out.println("F");
        } else {
            System.out.println("Score out of range");
        }
    }
}