package com.example

import grails.rest.Resource

@Resource(uri = '/model')
class Model {

    String name

    static constraints = {
    }
}
